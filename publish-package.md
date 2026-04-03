## Publish Steps

1. Run `npm run build:package`.
2. Run `npm run pack:check` to validate the generated npm tarball without publishing.
3. Navigate to the `dist-lib` folder.
4. Ensure the generated package name is `@revivejs/ng-multiselect-dropdown` and `private` is `false`.
5. Authenticate with npm using `npm login`.
6. Publish the package with `npm publish --access public`.
7. If you want to publish the demo site, run `npm run deployOnly` from the repository root.

Current release line:

- `6.x` supports Angular 21.
- `5.x` supports Angular 20.
- `4.x` supports Angular 19.
- `3.x` supports Angular 18.
- `2.x` supports Angular 17.
- `1.x` supports Angular 16.

## Package

[![npm version](https://img.shields.io/npm/v/%40revivejs%2Fng-multiselect-dropdown.svg)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![downloads](https://img.shields.io/npm/dt/%40revivejs%2Fng-multiselect-dropdown.svg)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
