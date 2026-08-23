import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FIXTURE_MANIFEST = 'package.fixture.json';

const DEFAULT_EXPORTS = [
  'IDropdownSettings',
  'MultiSelectComponent',
  'NgMultiSelectDropDownModule'
];

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function collectMetadata(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) collectMetadata(target, files);
    else if (entry.name === 'stackline-release.json') files.push(target);
  }
  return files;
}

function validateFixtureMetadata(releaseRoot) {
  const metadata = readJson(path.join(releaseRoot, 'stackline-release.json'));
  const fixtureManifest = path.join(releaseRoot, FIXTURE_MANIFEST);
  const legacyManifest = path.join(releaseRoot, 'package.json');
  const manifest = readJson(existsSync(fixtureManifest) ? fixtureManifest : legacyManifest);

  assert(manifest.private === true, 'Compatibility fixtures must stay private');
  assert(metadata.packageName, 'stackline-release.json must declare packageName');
  assert(metadata.exactVersion, 'stackline-release.json must declare exactVersion');
  assert(metadata.family === `angular-${metadata.major}`, `Invalid family: ${metadata.family}`);
  assert(path.basename(releaseRoot) === metadata.exactVersion,
    `Fixture directory must match ${metadata.exactVersion}`);
  assert(
    manifest.dependencies?.[metadata.packageName] === `file:${metadata.localInstallSource}`,
    `Invalid local package source for ${metadata.packageName}`
  );

  const angularDependencies = Object.entries(manifest.dependencies || {})
    .filter(([name]) => name.startsWith('@angular/'));
  assert(angularDependencies.length > 0, 'No Angular dependencies were declared');
  for (const [name, version] of angularDependencies) {
    assert(
      version === metadata.exactVersion,
      `${name} must be pinned to ${metadata.exactVersion}, found ${version}`
    );
  }

  return { manifest, metadata };
}

export async function validateRelease(releaseRoot) {
  const { manifest, metadata } = validateFixtureMetadata(releaseRoot);
  const repositoryRoot = path.resolve(releaseRoot, '../../..');
  const entryPoint = path.join(
    repositoryRoot,
    'src/ng-multiselect-dropdown/src/public_api.ts'
  );

  assert(existsSync(entryPoint), `Library entry point not found: ${entryPoint}`);

  const dependencies = Object.fromEntries(
    Object.entries(manifest.dependencies || {})
      .filter(([name]) => name !== metadata.packageName)
  );
  const expectedExports = metadata.expectedExports?.length
    ? metadata.expectedExports
    : DEFAULT_EXPORTS;
  const workRoot = mkdtempSync(path.join(tmpdir(), 'stackline-ng-multiselect-'));

  try {
    writeFileSync(
      path.join(workRoot, 'package.json'),
      `${JSON.stringify({
        name: 'stackline-ng-multiselect-smoke',
        private: true,
        dependencies,
        devDependencies: manifest.devDependencies || {}
      }, null, 2)}\n`
    );

    const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    execFileSync(
      npm,
      ['install', '--ignore-scripts', '--package-lock=false', '--no-audit', '--no-fund'],
      { cwd: workRoot, stdio: 'inherit' }
    );

    const smokeFile = path.join(workRoot, 'stackline-smoke.ts');
    writeFileSync(
      smokeFile,
      `import { ${expectedExports.join(', ')} } from ${JSON.stringify(metadata.packageName)};\nvoid 0;\n`
    );

    const tsconfigFile = path.join(workRoot, 'tsconfig.json');
    writeFileSync(
      tsconfigFile,
      `${JSON.stringify({
        compilerOptions: {
          experimentalDecorators: true,
          lib: ['ES2020', 'DOM'],
          module: 'ES2020',
          moduleResolution: 'Bundler',
          noEmit: true,
          skipLibCheck: true,
          strict: false,
          target: 'ES2020',
          useDefineForClassFields: false,
          paths: {
            [metadata.packageName]: [entryPoint],
            '@angular/*': [path.join(workRoot, 'node_modules/@angular/*')]
          }
        },
        files: [smokeFile]
      }, null, 2)}\n`
    );

    const tsc = path.join(
      workRoot,
      'node_modules',
      '.bin',
      process.platform === 'win32' ? 'tsc.cmd' : 'tsc'
    );
    execFileSync(tsc, ['--project', tsconfigFile], { cwd: workRoot, stdio: 'inherit' });
    process.stdout.write(
      `Validated ${metadata.packageName} with Angular ${metadata.exactVersion}\n`
    );
  } finally {
    rmSync(workRoot, { recursive: true, force: true });
  }
}

export function validateCatalog(repositoryRoot) {
  const metadataFiles = collectMetadata(path.join(repositoryRoot, 'docs-src'));
  assert(metadataFiles.length > 0, 'No compatibility fixtures were found');

  for (const metadataFile of metadataFiles) {
    const releaseRoot = path.dirname(metadataFile);
    assert(existsSync(path.join(releaseRoot, FIXTURE_MANIFEST)),
      `Missing ${FIXTURE_MANIFEST}: ${releaseRoot}`);
    assert(!existsSync(path.join(releaseRoot, 'package.json')),
      `Historical fixture must not expose package.json: ${releaseRoot}`);
    assert(!existsSync(path.join(releaseRoot, 'package-lock.json')),
      `Historical fixture must not expose package-lock.json: ${releaseRoot}`);
    assert(existsSync(path.join(releaseRoot, 'stackline-validate.mjs')),
      `Missing fixture validator: ${releaseRoot}`);
    validateFixtureMetadata(releaseRoot);
  }

  process.stdout.write(`Validated ${metadataFiles.length} compatibility fixtures\n`);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] === currentFile && process.argv[2] === '--catalog') {
  validateCatalog(path.resolve(path.dirname(currentFile), '..'));
}
