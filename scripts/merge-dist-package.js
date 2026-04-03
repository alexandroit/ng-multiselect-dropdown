const fs = require('fs');
const path = require('path');

const distPackagePath = path.resolve(__dirname, '..', 'dist-lib', 'package.json');
const templatePackagePath = path.resolve(__dirname, '..', 'package-lib-template.json');

const generatedPackage = JSON.parse(fs.readFileSync(distPackagePath, 'utf8'));
const templatePackage = JSON.parse(fs.readFileSync(templatePackagePath, 'utf8'));

const mergedPackage = {
  ...generatedPackage,
  ...templatePackage,
  dependencies: templatePackage.dependencies || generatedPackage.dependencies,
  peerDependencies: templatePackage.peerDependencies || generatedPackage.peerDependencies,
  publishConfig: templatePackage.publishConfig || generatedPackage.publishConfig,
  keywords: templatePackage.keywords || generatedPackage.keywords,
  files: templatePackage.files || generatedPackage.files,
  sideEffects:
    typeof templatePackage.sideEffects !== 'undefined'
      ? templatePackage.sideEffects
      : generatedPackage.sideEffects
};

delete mergedPackage.private;

fs.writeFileSync(distPackagePath, JSON.stringify(mergedPackage, null, 2) + '\n');
