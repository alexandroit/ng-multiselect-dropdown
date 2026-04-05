# @revivejs/ng-multiselect-dropdown

> A maintained **Angular 20 multi-select dropdown component** with support for template-driven forms, reactive forms, primitive or object data sources, built-in search, selection limits, disabled items, and versioned docs for every maintained Angular line.

[![npm version](https://img.shields.io/npm/v/@revivejs/ng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/ng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/ng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/ng-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/ng-multiselect-dropdown/blob/main/LICENSE)
[![Angular 20](https://img.shields.io/badge/Angular-20-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/ng-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/ng-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/ng-multiselect-dropdown/)** | **[npm](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/ng-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/ng-multiselect-dropdown)**

**Latest version:** `5.0.3`

---

> **Credits:** Original library by [NileshPatel17](https://github.com/NileshPatel17/ng-multiselect-dropdown). Current maintenance, Angular upgrade work, versioned docs, package publishing, and repository stewardship by [Alexandro Paixao Marques](https://github.com/alexandroit).

---

## Why this library?

The original `ng-multiselect-dropdown` package covered the classic Angular dropdown API well, but its release cadence and documentation history were no longer aligned with current Angular lines. This maintained package keeps the familiar public API intact while providing a versioned docs build, patched npm publication metadata, and maintained Angular 16 through Angular 21 release lines.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 20 maintained release line | ✅ |
| Backward release history for Angular 16, 17, 18, 19, and 20 | ✅ |
| Template-driven forms with `[(ngModel)]` | ✅ |
| Reactive forms with `formControlName` | ✅ |
| Primitive arrays (`string[]`, `number[]`) | ✅ |
| Object arrays with `idField` / `textField` | ✅ |
| Single-selection mode | ✅ |
| Multi-selection mode | ✅ |
| Select-all / clear-all actions | ✅ |
| Built-in search filter | ✅ |
| Remote-search workflow with `allowRemoteDataSearch` | ✅ |
| Disabled items via `disabledField` | ✅ |
| Selection limits and badge limits | ✅ |
| Theme source file for customization | ✅ |
| GitHub Pages versioned docs | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Basic Usage](#basic-usage)
5. [Single Selection](#single-selection)
6. [Reactive Forms](#reactive-forms)
7. [Search and Remote Data](#search-and-remote-data)
8. [Settings Reference](#settings-reference)
9. [Outputs](#outputs)
10. [Theme Customization](#theme-customization)
11. [Run Locally](#run-locally)
12. [FAQ](#faq)
13. [License](#license)

## Angular Version Compatibility

| Package version | Angular version | TypeScript version | Demo link |
| :---: | :---: | :---: | :--- |
| **6.0.3** | **21.2.x** | **5.9.x** | [Angular 21 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-21/) |
| **5.0.3** | **20.3.x** | **5.9.x** | [Angular 20 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-20/) |
| **4.0.3** | **19.2.x** | **5.8.x** | [Angular 19 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-19/) |
| **3.0.3** | **18.2.x** | **5.5.x** | [Angular 18 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-18/) |
| **2.0.3** | **17.3.x** | **5.4.x** | [Angular 17 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-17/) |
| **1.0.3** | **16.2.x** | **5.1.x** | [Angular 16 demo](https://alexandroit.github.io/ng-multiselect-dropdown/angular-16/) |

## Installation

```bash
npm install @revivejs/ng-multiselect-dropdown
```

## Setup

### 1. Import the module

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

### 2. Bind it in the template

```html
<ng-multiselect-dropdown
  name="cities"
  [data]="cities"
  [settings]="settings"
  [(ngModel)]="selectedCities">
</ng-multiselect-dropdown>
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

## Single Selection

Use `singleSelection: true` when the dropdown should behave like a searchable single-picker.

```ts
singleSettings: IDropdownSettings = {
  singleSelection: true,
  allowSearchFilter: true,
  closeDropDownOnSelection: true
};
```

## Reactive Forms

The component implements `ControlValueAccessor`, so it works directly with `FormGroup` and `formControlName`.

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

## Search and Remote Data

The built-in filter is enabled with `allowSearchFilter`. For remote workflows where the local array may start empty, keep the search box visible with `allowRemoteDataSearch`.

```ts
remoteSettings: IDropdownSettings = {
  idField: 'id',
  textField: 'text',
  allowSearchFilter: true,
  allowRemoteDataSearch: true,
  noDataAvailablePlaceholderText: 'Start typing to search'
};
```

```html
<ng-multiselect-dropdown
  [data]="remoteItems"
  [settings]="remoteSettings"
  [(ngModel)]="selectedRemoteItems"
  (onFilterChange)="loadRemoteItems($event)">
</ng-multiselect-dropdown>
```

## Settings Reference

| Setting | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `singleSelection` | `boolean` | Enables single-selection mode. | `false` |
| `idField` | `string` | Object property used as the item identifier. | `'id'` |
| `textField` | `string` | Object property used as the visible label. | `'text'` |
| `disabledField` | `string` | Object property used to disable an item. | `'isDisabled'` |
| `enableCheckAll` | `boolean` | Shows the select-all action. | `true` |
| `selectAllText` | `string` | Label for the select-all action. | `'Select All'` |
| `unSelectAllText` | `string` | Label for the clear-all action. | `'UnSelect All'` |
| `allowSearchFilter` | `boolean` | Enables the built-in search field. | `false` |
| `clearSearchFilter` | `boolean` | Clears the search field after selection changes. | `true` |
| `maxHeight` | `number` | Max menu height in pixels. | `197` |
| `itemsShowLimit` | `number` | Limits how many badges are rendered in the trigger. | `999999999999` |
| `limitSelection` | `number` | Caps how many items may be selected. | `-1` |
| `searchPlaceholderText` | `string` | Placeholder text for the search field. | `'Search'` |
| `noDataAvailablePlaceholderText` | `string` | Text shown when no items are available. | `'No data available'` |
| `noFilteredDataAvailablePlaceholderText` | `string` | Text shown when the filter yields no results. | `'No filtered data available'` |
| `closeDropDownOnSelection` | `boolean` | Closes the menu after a selection in single mode. | `false` |
| `showSelectedItemsAtTop` | `boolean` | Moves selected items toward the top of the list. | `false` |
| `defaultOpen` | `boolean` | Opens the menu by default. | `false` |
| `allowRemoteDataSearch` | `boolean` | Keeps the search box visible when the local list is empty. | `false` |

## Outputs

The component keeps the original callback names:

- `onSelect`
- `onDeSelect`
- `onSelectAll`
- `onDeSelectAll`
- `onFilterChange`
- `onDropDownClose`

## Theme Customization

The package ships with a theme source file at:

```text
node_modules/@revivejs/ng-multiselect-dropdown/themes/ng-multiselect-dropdown.theme.scss
```

For customization steps and screenshots, see [custom-theme.md](./custom-theme.md).

## Run Locally

```bash
npm install
npm run build:package
npm run pack:check
```

Versioned demo apps live under `docs-src/angular-16/` through `docs-src/angular-21/`, and the compiled GitHub Pages output lives under `docs/angular-16/` through `docs/angular-21/`.

## FAQ

### Does it still support the original API?

Yes. The maintained package keeps the original selector, module name, settings shape, and event names.

### Does it work with both `[(ngModel)]` and reactive forms?

Yes. The component supports template-driven and reactive forms.

### Can I use primitive arrays instead of object arrays?

Yes. Arrays of strings and numbers are supported, as well as object arrays mapped with `idField` and `textField`.

## License

MIT
