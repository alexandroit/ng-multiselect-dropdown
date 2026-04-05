# @revivejs/ng-multiselect-dropdown

Angular 21 multi-select dropdown component for template-driven and reactive forms.

[![npm version](https://img.shields.io/npm/v/%40revivejs%2Fng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/%40revivejs%2Fng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/%40revivejs%2Fng-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/ng-multiselect-dropdown/blob/main/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

**Docs index:** https://alexandroit.github.io/ng-multiselect-dropdown/  
**Latest demo:** https://alexandroit.github.io/ng-multiselect-dropdown/angular-21/  
**npm:** https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown  
**Repository:** https://github.com/alexandroit/ng-multiselect-dropdown  
**Theme guide:** [custom-theme.md](./custom-theme.md)

**Latest version:** `6.0.1`

Original library by [NileshPatel17](https://github.com/NileshPatel17/ng-multiselect-dropdown). Current maintenance, Angular upgrades, docs curation, and npm publishing by ReviveJS.

## Supported Angular Versions

| Package version | Angular version | TypeScript | Demo |
| --- | --- | --- | --- |
| **6.0.1** | **21.2.x** | **5.9.x** | [Angular 21 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-21/) |
| **5.0.1** | **20.3.x** | **5.9.x** | [Angular 20 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-20/) |
| **4.0.1** | **19.2.x** | **5.8.x** | [Angular 19 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-19/) |
| **3.0.1** | **18.2.x** | **5.5.x** | [Angular 18 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-18/) |
| **2.0.1** | **17.3.x** | **5.4.x** | [Angular 17 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-17/) |
| **1.0.1** | **16.2.x** | **5.1.x** | [Angular 16 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-16/) |

## Install

```bash
npm install @revivejs/ng-multiselect-dropdown
```

## Setup

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from '@revivejs/ng-multiselect-dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AppModule {}
```

## Basic Usage

```ts
import { Component } from '@angular/core';
import { IDropdownSettings } from '@revivejs/ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cities = [
    { id: 1, text: 'Toronto' },
    { id: 2, text: 'Lisbon' },
    { id: 3, text: 'Singapore' }
  ];

  selectedCities = [{ id: 2, text: 'Lisbon' }];

  settings: IDropdownSettings = {
    idField: 'id',
    textField: 'text',
    allowSearchFilter: true,
    enableCheckAll: true,
    itemsShowLimit: 3
  };
}
```

```html
<ng-multiselect-dropdown
  name="cities"
  [data]="cities"
  [settings]="settings"
  [(ngModel)]="selectedCities">
</ng-multiselect-dropdown>
```

## Reactive Forms

```ts
this.form = this.fb.group({
  cities: [[{ id: 2, text: 'Lisbon' }]]
});
```

```html
<form [formGroup]="form">
  <ng-multiselect-dropdown
    formControlName="cities"
    [data]="cities"
    [settings]="settings">
  </ng-multiselect-dropdown>
</form>
```

## Common Settings

| Setting | Type | Description | Default |
| --- | --- | --- | --- |
| `singleSelection` | `boolean` | Enables single-selection mode. | `false` |
| `idField` | `string` | Object property used as the item identifier. | `'id'` |
| `textField` | `string` | Object property used as the label. | `'text'` |
| `disabledField` | `string` | Object property used to disable an item. | `'isDisabled'` |
| `enableCheckAll` | `boolean` | Shows the select-all action. | `true` |
| `allowSearchFilter` | `boolean` | Enables the built-in search field. | `false` |
| `limitSelection` | `number` | Caps how many items can be selected. | `-1` |
| `itemsShowLimit` | `number` | Limits how many badges are rendered in the trigger. | `999999999999` |
| `closeDropDownOnSelection` | `boolean` | Closes the menu after a selection in single mode. | `false` |
| `allowRemoteDataSearch` | `boolean` | Keeps the search box visible when no items are loaded. | `false` |

## Outputs

- `onSelect`
- `onDeSelect`
- `onSelectAll`
- `onDeSelectAll`
- `onFilterChange`
- `onDropDownClose`

## Theme File

The package ships with a theme source at:

```text
node_modules/@revivejs/ng-multiselect-dropdown/themes/ng-multiselect-dropdown.theme.scss
```

For customization steps, see [custom-theme.md](./custom-theme.md).

## Versioned Docs Structure

This repository follows the same release discipline as the other ReviveJS Angular projects:

- `docs-src/angular-16/` through `docs-src/angular-21/` contain the source apps for each maintained Angular line.
- `docs/angular-16/` through `docs/angular-21/` contain the compiled GitHub Pages output.
- `docs/index.html` redirects to the latest line while keeping the full demo history accessible.

## Changelog

### 6.0.1

- Standardized the repository around versioned docs builds for Angular 16 through Angular 21.
- Refreshed the npm README to include the maintained version table and docs links.
- Updated package metadata to match the release-line documentation structure.
- Added dedicated demo builds for each maintained Angular line.
- Backported packaging fixes to Angular 16 through Angular 20 release lines so the published typings resolve correctly from npm.

## Local Development

```bash
npm install
npm run build:package
npm run pack:check
```

Use the versioned docs apps under `docs-src/angular-*` to validate a specific Angular line.

## License

MIT
