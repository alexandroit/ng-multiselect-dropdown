# Changelog

## 6.0.3 (Angular 21)

- Fixed dropdown state handling so multiple component instances no longer leak `defaultOpen` state across the docs application.
- Fixed source data remapping so object and primitive arrays stay aligned when settings are initialized after inputs bind.
- Refined the dropdown trigger and panel layout so selected badges, caret positioning, and option lists render reliably in modern Angular docs builds.

## 6.0.2 (Angular 21)

- Standardized the root and published npm README to the shared Stackline Angular project format.
- Aligned package metadata and compatibility tables with the maintained Angular 16 through 21 release history.
- Prepared matching README backports for Angular 16 through Angular 20 patch lines so npm stays consistent across maintained versions.

## 6.0.1 (Angular 21)

- Standardized the repository around versioned docs builds for Angular 16 through Angular 21.
- Added `docs-src/angular-16/` through `docs-src/angular-21/`.
- Added compiled docs history under `docs/angular-16/` through `docs/angular-21/`.
- Refreshed the npm README and package metadata to match the maintained release structure.
- Backported packaging fixes to Angular 16 through Angular 20 release lines (`1.0.1` through `5.0.1`) so the npm package exports complete typings.

## 6.0.0 (Angular 21)

- Published the Angular 21 release line for `@stackline/ng-multiselect-dropdown`.
