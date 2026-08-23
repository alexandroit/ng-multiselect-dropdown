import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

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

export async function validateRelease(releaseRoot) {
  const metadata = readJson(path.join(releaseRoot, 'stackline-release.json'));
  const manifest = readJson(path.join(releaseRoot, 'package.json'));
  const repositoryRoot = path.resolve(releaseRoot, '../../..');
  const entryPoint = path.join(
    repositoryRoot,
    'src/ng-multiselect-dropdown/src/public_api.ts'
  );

  assert(manifest.private === true, 'Compatibility fixtures must stay private');
  assert(metadata.packageName, 'stackline-release.json must declare packageName');
  assert(metadata.exactVersion, 'stackline-release.json must declare exactVersion');
  assert(existsSync(entryPoint), `Library entry point not found: ${entryPoint}`);

  const angularDependencies = Object.entries(manifest.dependencies || {})
    .filter(([name]) => name.startsWith('@angular/'));
  assert(angularDependencies.length > 0, 'No Angular dependencies were declared');
  for (const [name, version] of angularDependencies) {
    assert(
      version === metadata.exactVersion,
      `${name} must be pinned to ${metadata.exactVersion}, found ${version}`
    );
  }

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
