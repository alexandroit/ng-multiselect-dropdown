# @revivejs/ng-multiselect-dropdown

> A polished **Angular 20 multi-select dropdown** for template-driven and reactive forms, with search, single or multiple selection, custom data binding, and theme support.

[![npm version](https://img.shields.io/npm/v/%40revivejs%2Fng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/%40revivejs%2Fng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/%40revivejs%2Fng-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/%40revivejs%2Fng-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/ng-multiselect-dropdown/blob/master/LICENSE)
[![Angular 20](https://img.shields.io/badge/Angular-20-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/ng-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/ng-multiselect-dropdown/stargazers)

**[Documentation & Demo](https://alexandroit.github.io/ng-multiselect-dropdown/)** | **[Repository](https://github.com/alexandroit/ng-multiselect-dropdown)** | **[npm](https://www.npmjs.com/package/@revivejs/ng-multiselect-dropdown)** | **[Changelog](https://github.com/alexandroit/ng-multiselect-dropdown/blob/master/CHANGELOG.md)** | **[Custom Theme Guide](https://github.com/alexandroit/ng-multiselect-dropdown/blob/master/custom-theme.md)**

---

> **Credits:** Original library by [NileshPatel17](https://github.com/NileshPatel17/ng-multiselect-dropdown). Current maintenance, Angular upgrades, and package publishing by [Alexandro Paixao Marques](https://github.com/alexandroit/ng-multiselect-dropdown).

---

## Why this library?

`@revivejs/ng-multiselect-dropdown` is the actively maintained scoped continuation of this component, prepared for modern Angular 20 applications and first-class npm publishing under the `@revivejs` scope.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 20 release line | ✅ |
| Single and multiple selection | ✅ |
| Search and filter | ✅ |
| Template-driven forms (`ngModel`) | ✅ |
| Reactive forms support | ✅ |
| Custom text and placeholders | ✅ |
| Select all and clear all | ✅ |
| Item selection limit | ✅ |
| Disabled items | ✅ |
| Remote search trigger (`allowRemoteDataSearch`) | ✅ |
| Custom theme support | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Basic Usage](#basic-usage)
5. [Settings](#settings)
6. [Events](#events)
7. [Theming](#theming)
8. [Run Locally](#run-locally)
9. [Publishing](#publishing)
10. [License](#license)

## Angular Version Compatibility

| `@revivejs/ng-multiselect-dropdown` | Angular | TypeScript | Node.js |
| :--- | :---: | :---: | :---: |
| `5.x` | `20.x` | `5.9` | `>= 20.19` |
| `4.x` | `19.x` | `5.8` | `>= 18.19` |
| `3.x` | `18.x` | `5.5` | `>= 18.19` |
| `2.x` | `17.x` | `5.4` | `>= 18.13` |
| `1.x` | `16.x` | `5.0` | `>= 16.14` |

## Installation

```bash
npm install @revivejs/ng-multiselect-dropdown
```

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from '@revivejs/ng-multiselect-dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AppModule {}
```

### 2. Optional theme setup

```json
"styles": [
  "node_modules/@revivejs/ng-multiselect-dropdown/themes/ng-multiselect-dropdown.theme.scss"
]
```

### 3. Use the package from the official repository

Repository URL:

```text
https://github.com/alexandroit/ng-multiselect-dropdown
```

## Basic Usage

```ts
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from '@revivejs/ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangalore' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];

    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: unknown): void {
    console.log(item);
  }

  onSelectAll(items: unknown): void {
    console.log(items);
  }
}
```

```html
<ng-multiselect-dropdown
  [placeholder]="'Select options'"
  [settings]="dropdownSettings"
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  (onSelect)="onItemSelect($event)"
  (onSelectAll)="onSelectAll($event)">
</ng-multiselect-dropdown>
```

## Settings

| Setting | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `singleSelection` | `boolean` | Enables single-selection mode. | `false` |
| `placeholder` | `string` | Placeholder text shown when nothing is selected. | `'Select'` |
| `disabled` | `boolean` | Disables the dropdown. | `false` |
| `data` | `Array<any>` | Data source for the dropdown. | `[]` |
| `idField` | `string` | Field used as the item identifier. | `'id'` |
| `textField` | `string` | Field used as the item label. | `'text'` |
| `disabledField` | `string` | Field used to mark disabled items. | `'isDisabled'` |
| `enableCheckAll` | `boolean` | Shows the select-all option. | `true` |
| `selectAllText` | `string` | Label for the select-all option. | `'Select All'` |
| `unSelectAllText` | `string` | Label for the clear-all option. | `'UnSelect All'` |
| `allowSearchFilter` | `boolean` | Enables the search box. | `false` |
| `searchPlaceholderText` | `string` | Search input placeholder text. | `'Search'` |
| `clearSearchFilter` | `boolean` | Clears search text when the dropdown closes. | `true` |
| `maxHeight` | `number` | Max dropdown list height in pixels. | `197` |
| `itemsShowLimit` | `number` | Limits how many selected items appear in the control. | `999999999999` |
| `limitSelection` | `number` | Maximum allowed selected items. | `-1` |
| `noDataAvailablePlaceholderText` | `string` | Message shown when there is no data. | `'No data available'` |
| `noFilteredDataAvailablePlaceholderText` | `string` | Message shown when search returns no results. | `'No filtered data available'` |
| `closeDropDownOnSelection` | `boolean` | Closes the dropdown after selection in single mode. | `false` |
| `showSelectedItemsAtTop` | `boolean` | Moves selected items to the top of the list. | `false` |
| `defaultOpen` | `boolean` | Opens the dropdown by default. | `false` |
| `allowRemoteDataSearch` | `boolean` | Keeps remote search available even when data is empty. | `false` |

## Events

- `onSelect`: Fires when one item is selected.
- `onDeSelect`: Fires when one item is deselected.
- `onSelectAll`: Fires when all visible items are selected.
- `onDeSelectAll`: Fires when all items are deselected.
- `onFilterChange`: Fires when the search text changes.
- `onDropDownClose`: Fires when the dropdown closes.

## Theming

The package ships with a theme file at:

```text
node_modules/@revivejs/ng-multiselect-dropdown/themes/ng-multiselect-dropdown.theme.scss
```

For step-by-step theme customization, see [custom-theme.md](https://github.com/alexandroit/ng-multiselect-dropdown/blob/master/custom-theme.md).

## Run Locally

```bash
npm install
npm start
```

The local demo runs at `http://localhost:4201/`, and the production demo is generated into the `docs/` directory for GitHub Pages publishing.

## Publishing

```bash
npm run build:package
npm run pack:check
```

This prepares the publishable package in `dist-lib/` with the scoped package name `@revivejs/ng-multiselect-dropdown` and performs a dry-run tarball check without publishing.

## License

MIT License.
