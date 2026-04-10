"use strict";
(self["webpackChunkdocs_angular_21"] = self["webpackChunkdocs_angular_21"] || []).push([["main"],{

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _docs_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-meta */ 5745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stackline/ng-multiselect-dropdown */ 5125);





function AppComponent_div_313_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r1);
  }
}
class AppComponent {
  fb;
  docsMeta = _docs_meta__WEBPACK_IMPORTED_MODULE_0__.DOCS_META;
  installCode = `npm install @stackline/ng-multiselect-dropdown@${this.docsMeta.packageRange}`;
  setupCode = [`import { FormsModule, ReactiveFormsModule } from '@angular/forms';`, `import { NgMultiSelectDropDownModule } from '@stackline/ng-multiselect-dropdown';`, ``, `@NgModule({`, `  imports: [`, `    BrowserModule,`, `    FormsModule,`, `    ReactiveFormsModule,`, `    NgMultiSelectDropDownModule.forRoot()`, `  ]`, `})`, `export class AppModule {}`].join('\n');
  templateCode = [`<ng-multiselect-dropdown`, `  [data]="basicCities"`, `  [settings]="basicSettings"`, `  [(ngModel)]="basicSelected"`, `  (onSelect)="onEvent('Basic example', 'select', $event)">`, `</ng-multiselect-dropdown>`].join('\n');
  basicTsCode = [`basicCities = [`, `  { id: 1, text: 'Toronto' },`, `  { id: 2, text: 'Lisbon' },`, `  { id: 3, text: 'Singapore' }`, `];`, ``, `basicSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  allowSearchFilter: true,`, `  itemsShowLimit: 3`, `};`].join('\n');
  singleTsCode = [`singleCities = ['Toronto', 'Lisbon', 'Singapore', 'Auckland'];`, ``, `singleSettings = {`, `  singleSelection: true,`, `  allowSearchFilter: true,`, `  closeDropDownOnSelection: true`, `};`].join('\n');
  reactiveTsCode = [`reactiveForm = this.fb.group({`, `  cities: [[{ id: 2, text: 'Template parity' }]]`, `});`, ``, `reactiveSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  enableCheckAll: false,`, `  allowSearchFilter: true`, `};`].join('\n');
  limitTsCode = [`limitSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  allowSearchFilter: true,`, `  limitSelection: 2,`, `  itemsShowLimit: 2`, `};`].join('\n');
  remoteTsCode = [`remoteSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  allowSearchFilter: true,`, `  allowRemoteDataSearch: true,`, `  noDataAvailablePlaceholderText: 'Start typing to simulate a remote query'`, `};`, ``, `onRemoteFilter(term: string) {`, `  this.remoteData = this.remoteCatalog`, `    .filter((item) => item.text.toLowerCase().includes(term.toLowerCase()));`, `}`].join('\n');
  disabledTsCode = [`disabledCities = [`, `  { id: 1, text: 'Toronto' },`, `  { id: 2, text: 'Lisbon', isDisabled: true },`, `  { id: 3, text: 'Singapore' }`, `];`, ``, `disabledSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  disabledField: 'isDisabled',`, `  allowSearchFilter: true,`, `  showSelectedItemsAtTop: true`, `};`].join('\n');
  basicCities = [{
    id: 1,
    text: 'Toronto'
  }, {
    id: 2,
    text: 'Lisbon'
  }, {
    id: 3,
    text: 'Singapore'
  }, {
    id: 4,
    text: 'Auckland'
  }, {
    id: 5,
    text: 'Oslo'
  }];
  basicSelected = [{
    id: 2,
    text: 'Lisbon'
  }, {
    id: 4,
    text: 'Auckland'
  }];
  basicSettings = {
    idField: 'id',
    textField: 'text',
    allowSearchFilter: true,
    enableCheckAll: true,
    selectAllText: 'Select all',
    unSelectAllText: 'Clear all',
    itemsShowLimit: 3
  };
  singleCities = ['Toronto', 'Lisbon', 'Singapore', 'Auckland', 'Oslo'];
  singleSelected = ['Toronto'];
  singleSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  reactiveCities = [{
    id: 1,
    text: 'Angular forms'
  }, {
    id: 2,
    text: 'Template parity'
  }, {
    id: 3,
    text: 'Search filter'
  }, {
    id: 4,
    text: 'Select all'
  }];
  reactiveSettings = {
    idField: 'id',
    textField: 'text',
    enableCheckAll: false,
    allowSearchFilter: true
  };
  limitCities = [{
    id: 1,
    text: 'Toronto'
  }, {
    id: 2,
    text: 'Lisbon'
  }, {
    id: 3,
    text: 'Singapore'
  }, {
    id: 4,
    text: 'Auckland'
  }, {
    id: 5,
    text: 'Oslo'
  }];
  limitSelected = [{
    id: 1,
    text: 'Toronto'
  }];
  limitSettings = {
    idField: 'id',
    textField: 'text',
    allowSearchFilter: true,
    limitSelection: 2,
    itemsShowLimit: 2
  };
  remoteData = [];
  remoteSelected = [];
  remoteSettings = {
    idField: 'id',
    textField: 'text',
    allowSearchFilter: true,
    allowRemoteDataSearch: true,
    noDataAvailablePlaceholderText: 'Start typing to simulate a remote query',
    noFilteredDataAvailablePlaceholderText: 'No remote matches found'
  };
  remoteCatalog = [{
    id: 1,
    text: 'Toronto'
  }, {
    id: 2,
    text: 'Tokyo'
  }, {
    id: 3,
    text: 'Tallinn'
  }, {
    id: 4,
    text: 'Lisbon'
  }, {
    id: 5,
    text: 'Lima'
  }, {
    id: 6,
    text: 'Lahore'
  }, {
    id: 7,
    text: 'Singapore'
  }, {
    id: 8,
    text: 'Seoul'
  }, {
    id: 9,
    text: 'Stockholm'
  }];
  disabledCities = [{
    id: 1,
    text: 'Toronto'
  }, {
    id: 2,
    text: 'Lisbon',
    isDisabled: true
  }, {
    id: 3,
    text: 'Singapore'
  }, {
    id: 4,
    text: 'Auckland',
    isDisabled: true
  }, {
    id: 5,
    text: 'Oslo'
  }];
  disabledSelected = [{
    id: 5,
    text: 'Oslo'
  }];
  disabledSettings = {
    idField: 'id',
    textField: 'text',
    disabledField: 'isDisabled',
    allowSearchFilter: true,
    showSelectedItemsAtTop: true
  };
  reactiveForm;
  eventLog = ['Demo loaded successfully.'];
  constructor(fb) {
    this.fb = fb;
    this.reactiveForm = this.fb.group({
      cities: [[{
        id: 2,
        text: 'Template parity'
      }]]
    });
  }
  onEvent(demo, type, payload) {
    const message = `${demo} ${type}: ${this.formatPayload(payload)}`;
    this.eventLog = [`${this.timeLabel()} ${message}`, ...this.eventLog].slice(0, 14);
  }
  onReactiveChange() {
    this.onEvent('Reactive form', 'value', this.reactiveForm.value.cities || []);
  }
  resetReactive() {
    this.reactiveForm.get('cities')?.setValue([{
      id: 1,
      text: 'Angular forms'
    }]);
    this.onReactiveChange();
  }
  onRemoteFilter(term) {
    const normalized = (term || '').toLowerCase().trim();
    this.remoteData = normalized ? this.remoteCatalog.filter(item => item.text.toLowerCase().includes(normalized)) : [];
    this.onEvent('Remote search', 'filter', term || '(empty)');
  }
  clearLog() {
    this.eventLog = ['Event log cleared.'];
  }
  timeLabel() {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  formatPayload(payload) {
    if (typeof payload === 'string') {
      return payload;
    }
    const text = JSON.stringify(payload);
    return text.length > 110 ? `${text.slice(0, 107)}...` : text;
  }
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["docs-root"]],
    standalone: false,
    decls: 331,
    vars: 50,
    consts: [[1, "shell"], [1, "hero"], [1, "hero-card", "hero-main"], [1, "badge"], [1, "feature-grid"], [1, "feature"], [1, "cta-row"], ["href", "#demos", 1, "btn"], ["href", "https://github.com/alexandroit/ng-multiselect-dropdown#readme", "target", "_blank", "rel", "noreferrer", 1, "btn", "secondary"], [1, "hero-card", "hero-setup"], [1, "step"], [1, "step-num"], ["id", "demos", 1, "layout"], [1, "panels"], [1, "panel"], [1, "panel-header"], [1, "demo-grid"], [1, "demo-card"], [1, "code"], [1, "dropdown-frame"], ["name", "basicCities", 3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "data", "settings", "ngModel"], [1, "state"], ["name", "singleCities", 3, "ngModelChange", "onSelect", "onDropDownClose", "data", "settings", "ngModel"], [3, "formGroup"], ["formControlName", "cities", 3, "onSelect", "onDeSelect", "onDeSelectAll", "data", "settings"], [1, "controls"], ["type", "button", 1, "secondary", 3, "click"], ["name", "limitedCities", 3, "ngModelChange", "onSelect", "onDeSelect", "data", "settings", "ngModel"], ["name", "remoteSearch", 3, "ngModelChange", "onFilterChange", "onSelect", "onDeSelect", "data", "settings", "ngModel"], ["name", "disabledCities", 3, "ngModelChange", "onSelect", "onDeSelect", "data", "settings", "ngModel"], [1, "panel", "ref-panel"], [1, "ref-grid"], [1, "ref-card"], [1, "api-table"], [1, "log-panel"], [1, "log-panel-header"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "log-list"], ["class", "log-entry", 4, "ngFor", "ngForOf"], [1, "release-card"], [1, "release-list"], [1, "release-item"], [1, "footer"], [1, "log-entry"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "@stackline/ng-multiselect-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " A maintained Angular multiselect dropdown for template-driven and reactive forms, with search, single or multiple selection, object or primitive data sources, and a dedicated docs build for every maintained Angular line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Classic Angular API");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Keep using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "formControlName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ", and the original dropdown callbacks without adapters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5)(21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Primitive or object data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Feed the component with strings or structured objects by declaring ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "idField");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "textField");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5)(31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Forms first");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Template-driven and reactive workflows are both covered in the example gallery. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5)(35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Versioned docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Each Angular release line gets its own docs build so demo behavior stays aligned with the package published on npm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6)(39, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "See demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " README ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9)(44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Setup in 3 steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 10)(47, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div")(50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Install");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 10)(55, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div")(58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Register the module");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 10)(63, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div")(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Render the dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "section", 12)(71, "div", 13)(72, "article", 14)(73, "div", 15)(74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Core examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Start with multiple selection, single selection, and reactive forms. The examples below cover the most common production setups for the component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 16)(79, "section", 17)(80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Multiple selection with object data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "idField");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "textField");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " to map custom objects while keeping search and select-all enabled. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "<ng-multiselect-dropdown\n  name=\"basicCities\"\n  [data]=\"basicCities\"\n  [settings]=\"basicSettings\"\n  [(ngModel)]=\"basicSelected\">\n</ng-multiselect-dropdown>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 19)(95, "form")(96, "ng-multiselect-dropdown", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_ng_multiselect_dropdown_ngModelChange_96_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.basicSelected, $event) || (ctx.basicSelected = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function AppComponent_Template_ng_multiselect_dropdown_onSelect_96_listener($event) {
          return ctx.onEvent("Basic example", "select", $event);
        })("onDeSelect", function AppComponent_Template_ng_multiselect_dropdown_onDeSelect_96_listener($event) {
          return ctx.onEvent("Basic example", "deselect", $event);
        })("onSelectAll", function AppComponent_Template_ng_multiselect_dropdown_onSelectAll_96_listener($event) {
          return ctx.onEvent("Basic example", "selectAll", $event);
        })("onDeSelectAll", function AppComponent_Template_ng_multiselect_dropdown_onDeSelectAll_96_listener($event) {
          return ctx.onEvent("Basic example", "clearAll", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](99, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "section", 17)(101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Single selection with primitive arrays");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " The dropdown also accepts plain strings. Close on selection keeps the interaction compact for \u201Cpick one\u201D workflows. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "<ng-multiselect-dropdown\n  name=\"singleCities\"\n  [data]=\"singleCities\"\n  [settings]=\"singleSettings\"\n  [(ngModel)]=\"singleSelected\">\n</ng-multiselect-dropdown>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 19)(110, "form")(111, "ng-multiselect-dropdown", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_ng_multiselect_dropdown_ngModelChange_111_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.singleSelected, $event) || (ctx.singleSelected = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function AppComponent_Template_ng_multiselect_dropdown_onSelect_111_listener($event) {
          return ctx.onEvent("Single selection", "select", $event);
        })("onDropDownClose", function AppComponent_Template_ng_multiselect_dropdown_onDropDownClose_111_listener() {
          return ctx.onEvent("Single selection", "close", ctx.singleSelected);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](114, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "section", 17)(116, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Reactive forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " Bind the component to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "FormGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "formControlName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " and treat it like any other Angular form control. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "<form [formGroup]=\"reactiveForm\">\n  <ng-multiselect-dropdown\n    formControlName=\"cities\"\n    [data]=\"reactiveCities\"\n    [settings]=\"reactiveSettings\">\n  </ng-multiselect-dropdown>\n</form>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 19)(131, "form", 23)(132, "ng-multiselect-dropdown", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function AppComponent_Template_ng_multiselect_dropdown_onSelect_132_listener() {
          return ctx.onReactiveChange();
        })("onDeSelect", function AppComponent_Template_ng_multiselect_dropdown_onDeSelect_132_listener() {
          return ctx.onReactiveChange();
        })("onDeSelectAll", function AppComponent_Template_ng_multiselect_dropdown_onDeSelectAll_132_listener() {
          return ctx.onReactiveChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 25)(134, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_134_listener() {
          return ctx.resetReactive();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Reset selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](138, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "article", 14)(140, "div", 15)(141, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Behavior tuning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Limit selection, keep disabled items in the list, and wire remote-style filtering without replacing the component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 16)(146, "section", 17)(147, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Selection limits and badge limits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " Cap how many items can be selected and how many badges are shown inside the trigger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "<ng-multiselect-dropdown\n  name=\"limitedCities\"\n  [data]=\"limitCities\"\n  [settings]=\"limitSettings\"\n  [(ngModel)]=\"limitSelected\">\n</ng-multiselect-dropdown>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 19)(156, "form")(157, "ng-multiselect-dropdown", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_ng_multiselect_dropdown_ngModelChange_157_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.limitSelected, $event) || (ctx.limitSelected = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function AppComponent_Template_ng_multiselect_dropdown_onSelect_157_listener($event) {
          return ctx.onEvent("Selection limits", "select", $event);
        })("onDeSelect", function AppComponent_Template_ng_multiselect_dropdown_onDeSelect_157_listener($event) {
          return ctx.onEvent("Selection limits", "deselect", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](160, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "section", 17)(162, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Remote search hook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "allowRemoteDataSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " to keep the search input available even when the component has no local items loaded yet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "<ng-multiselect-dropdown\n  name=\"remoteSearch\"\n  [data]=\"remoteData\"\n  [settings]=\"remoteSettings\"\n  [(ngModel)]=\"remoteSelected\"\n  (onFilterChange)=\"onRemoteFilter($event)\">\n</ng-multiselect-dropdown>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 19)(174, "form")(175, "ng-multiselect-dropdown", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_ng_multiselect_dropdown_ngModelChange_175_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.remoteSelected, $event) || (ctx.remoteSelected = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFilterChange", function AppComponent_Template_ng_multiselect_dropdown_onFilterChange_175_listener($event) {
          return ctx.onRemoteFilter($event);
        })("onSelect", function AppComponent_Template_ng_multiselect_dropdown_onSelect_175_listener($event) {
          return ctx.onEvent("Remote search", "select", $event);
        })("onDeSelect", function AppComponent_Template_ng_multiselect_dropdown_onDeSelect_175_listener($event) {
          return ctx.onEvent("Remote search", "deselect", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](178, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "section", 17)(180, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Disabled items and selected-first ordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, " Mark items with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "disabledField");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " and keep selected items pinned near the top for dense selection workflows. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "<ng-multiselect-dropdown\n  name=\"disabledCities\"\n  [data]=\"disabledCities\"\n  [settings]=\"disabledSettings\"\n  [(ngModel)]=\"disabledSelected\">\n</ng-multiselect-dropdown>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 19)(192, "form")(193, "ng-multiselect-dropdown", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_ng_multiselect_dropdown_ngModelChange_193_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.disabledSelected, $event) || (ctx.disabledSelected = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function AppComponent_Template_ng_multiselect_dropdown_onSelect_193_listener($event) {
          return ctx.onEvent("Disabled items", "select", $event);
        })("onDeSelect", function AppComponent_Template_ng_multiselect_dropdown_onDeSelect_193_listener($event) {
          return ctx.onEvent("Disabled items", "deselect", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](196, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "article", 30)(198, "div", 15)(199, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Quick API reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " These are the inputs and outputs most teams reach for first when integrating the dropdown into real forms. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 31)(204, "div", 32)(205, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Core inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "table", 33)(208, "tbody")(209, "tr")(210, "td")(211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "[data]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Array of strings or objects used as the available options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "tr")(216, "td")(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "[settings]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Behavior flags such as search, limits, and custom field mapping.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "tr")(222, "td")(223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Two-way binds the selected values in template-driven forms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "tr")(228, "td")(229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "formControlName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Connects the dropdown to a reactive form control.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 32)(234, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Common settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "table", 33)(237, "tbody")(238, "tr")(239, "td")(240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "singleSelection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Turns the dropdown into a one-choice picker.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "tr")(245, "td")(246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "allowSearchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Enables the built-in search field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "tr")(251, "td")(252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "limitSelection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Caps how many items can be selected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "tr")(257, "td")(258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "itemsShowLimit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Limits how many selected badges are shown in the trigger.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "tr")(263, "td")(264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "allowRemoteDataSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Keeps the search box visible even with no loaded items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 32)(269, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Outputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "table", 33)(272, "tbody")(273, "tr")(274, "td")(275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "(onSelect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Emits the selected item.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "tr")(280, "td")(281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "(onDeSelect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Emits when a selected item is removed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "tr")(286, "td")(287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "(onSelectAll)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Emits the full visible list when select-all runs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "tr")(292, "td")(293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "(onDeSelectAll)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Emits when all selections are cleared.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "tr")(298, "td")(299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "(onFilterChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "Emits the current search text for remote queries.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "aside", 34)(304, "div", 35)(305, "div")(306, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Event Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Interact with the demos to watch Angular form and dropdown events appear here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_310_listener() {
          return ctx.clearLog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](313, AppComponent_div_313_Template, 2, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 39)(315, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Release line");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, " This docs build is pinned to the same Angular release line and package version published on npm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 40)(320, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Pattern: versioned docs-src + compiled docs history");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "footer", 42)(329, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, " Original library by Nilesh Patel. Maintained packaging, Angular release upgrades, docs curation, and publication stewardship by Stackline. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.docsMeta.badge);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.installCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.setupCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.templateCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.basicTsCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.basicCities)("settings", ctx.basicSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.basicSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](99, 38, ctx.basicSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.singleTsCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.singleCities)("settings", ctx.singleSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.singleSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](114, 40, ctx.singleSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.reactiveTsCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.reactiveCities)("settings", ctx.reactiveSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](138, 42, ctx.reactiveForm.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.limitTsCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.limitCities)("settings", ctx.limitSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.limitSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](160, 44, ctx.limitSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.remoteTsCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.remoteData)("settings", ctx.remoteSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.remoteSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](178, 46, ctx.remoteData));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.disabledTsCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.disabledCities)("settings", ctx.disabledSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.disabledSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](196, 48, ctx.disabledSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.eventLog);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Package line: ", ctx.docsMeta.packageVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Angular compatibility: ", ctx.docsMeta.angularVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Docs path: /", ctx.docsMeta.docsPath, "/");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.MultiSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
    styles: ["[_nghost-%COMP%] {\n  color: #17324d;\n  display: block;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top left, rgba(12, 115, 184, 0.14), transparent 32%),\n    radial-gradient(circle at top right, rgba(214, 90, 37, 0.18), transparent 34%),\n    #f5f7fb;\n  margin: 0 auto;\n  max-width: 1320px;\n  min-height: 100vh;\n  overflow-x: clip;\n  padding: 32px 20px 60px;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", serif;\n  letter-spacing: -0.02em;\n}\n\np[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n}\n\n.hero[_ngcontent-%COMP%] {\n  align-items: stretch;\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1.7fr) minmax(300px, 1fr);\n  margin: 0 0 1.5rem;\n}\n\n.hero-main[_ngcontent-%COMP%], \n.hero-setup[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.panels[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(191, 206, 223, 0.8);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(23, 50, 77, 0.12);\n  min-width: 0;\n  padding: 1.4rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #17324d;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n  padding: 0.35rem 0.65rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4vw, 3.4rem);\n  margin: 0 0 0.85rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.6;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n}\n\n.feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #17324d;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n\n.cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  align-items: center;\n  background: linear-gradient(135deg, #c15d3f, #9e4a31);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  justify-content: center;\n  padding: 0.72rem 1.1rem;\n  text-decoration: none;\n}\n\n.btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #17324d;\n}\n\n.hero-setup[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-rows: auto auto auto 1fr;\n}\n\n.hero-setup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: auto minmax(0, 1fr);\n}\n\n.step[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.step-num[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #0c73b8;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.8rem;\n  font-weight: 700;\n  height: 1.9rem;\n  justify-content: center;\n  width: 1.9rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.state[_ngcontent-%COMP%] {\n  background: #13263a;\n  border-radius: 14px;\n  color: #edf4fb;\n  font-size: 0.83rem;\n  line-height: 1.6;\n  margin: 0.55rem 0 0;\n  overflow: auto;\n  overflow-wrap: anywhere;\n  padding: 0.95rem 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  gap: 24px;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  margin: 0;\n}\n\n.panels[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n}\n\n.demo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr;\n}\n\n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  overflow: visible;\n  padding: 1rem;\n}\n\n.demo-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n}\n\n.dropdown-frame[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n  overflow: visible;\n  position: relative;\n  z-index: 2;\n}\n\n.dropdown-frame[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], \n.dropdown-frame[_ngcontent-%COMP%]   ng-multiselect-dropdown[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  position: relative;\n  z-index: 3;\n}\n\n.dropdown-frame[_ngcontent-%COMP%]   ng-multiselect-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  ng-multiselect-dropdown .multiselect-dropdown, \n  ng-multiselect-dropdown .dropdown-btn, \n  ng-multiselect-dropdown .dropdown-list {\n  max-width: 100%;\n  min-width: 0;\n}\n\n  ng-multiselect-dropdown .selected-item-container, \n  ng-multiselect-dropdown .selected-item {\n  min-width: 0;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.9rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  padding: 0.72rem 1rem;\n}\n\nbutton.secondary[_ngcontent-%COMP%] {\n  background: rgba(12, 115, 184, 0.1);\n  color: #0c73b8;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #17324d;\n}\n\nbutton.small[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n}\n\n.state[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n\n.ref-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.api-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9e2ec;\n  padding: 0.7rem 0;\n  text-align: left;\n  vertical-align: top;\n}\n\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: #17324d;\n  white-space: nowrap;\n  width: 1%;\n}\n\n.log-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: calc(100vh - 40px);\n  min-width: 0;\n  overflow: hidden;\n  position: sticky;\n  top: 1rem;\n}\n\n.log-panel-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.log-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0.65rem;\n  overflow-y: auto;\n}\n\n.release-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n\n.log-entry[_ngcontent-%COMP%], \n.release-item[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 14px;\n  color: #17324d;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  padding: 0.75rem 0.85rem;\n  word-break: break-word;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 0;\n}\n\n@media (max-width: 1200px) {\n  .hero[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .layout[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n\n  .log-panel[_ngcontent-%COMP%] {\n    order: 2;\n    max-height: min(360px, 50vh);\n    position: static;\n  }\n}\n\n@media (max-width: 980px) {\n  .ref-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 860px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 20px 14px 42px;\n  }\n\n  .feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .step[_ngcontent-%COMP%] {\n    gap: 0.55rem;\n    grid-template-columns: 1fr;\n  }\n\n  .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    white-space: normal;\n    width: auto;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.1rem, 12vw, 3rem);\n  }\n\n  .cta-row[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 1rem;\n  }\n\n  .hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n   .code[_ngcontent-%COMP%], \n   .state[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 16px 12px 36px;\n  }\n\n  .feature[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%] {\n    padding: 0.9rem;\n  }\n}\n\n\n\n[_nghost-%COMP%] {\n  --stack-docs-surface: rgba(255, 255, 255, 0.92);\n  --stack-docs-surface-soft: #eef4fb;\n  --stack-docs-border: rgba(63, 81, 181, 0.14);\n  --stack-docs-border-strong: rgba(63, 81, 181, 0.22);\n  --stack-docs-text: #212121;\n  --stack-docs-muted: #616161;\n  --stack-docs-primary: #3f51b5;\n  --stack-docs-primary-soft: #e8eaf6;\n  --stack-docs-shadow: 0 1px 2px rgba(33, 33, 33, 0.12), 0 18px 44px rgba(63, 81, 181, 0.08);\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(63, 81, 181, 0.14), transparent 28%),\n    radial-gradient(circle at left 18%, rgba(23, 50, 77, 0.08), transparent 26%),\n    linear-gradient(180deg, #f8f9fc 0%, #f5f7fb 44%, #eef2f8 100%);\n  color: var(--stack-docs-text);\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.demo-group[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%] {\n  background: var(--stack-docs-surface);\n  border-color: var(--stack-docs-border);\n  box-shadow: var(--stack-docs-shadow);\n}\n\n.badge[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%], \n.stage-pill[_ngcontent-%COMP%], \n.release-link[_ngcontent-%COMP%] {\n  background: var(--stack-docs-primary-soft);\n  color: var(--stack-docs-primary);\n  border: 1px solid var(--stack-docs-border-strong);\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.demo-note[_ngcontent-%COMP%], \n.history-copy[_ngcontent-%COMP%], \n.release-item[_ngcontent-%COMP%], \n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.demo-breadcrumb[_ngcontent-%COMP%], \n.example-stage-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--stack-docs-muted);\n}\n\n.feature[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.demo-group[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%], \n.table-host[_ngcontent-%COMP%], \n.toggle-card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 0%, var(--stack-docs-surface-soft) 100%);\n  border-color: var(--stack-docs-border);\n}\n\n.btn[_ngcontent-%COMP%], \n.release-link.is-current[_ngcontent-%COMP%], \n.demo-link.active[_ngcontent-%COMP%], \n.example-link.active[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%]:not(.secondary):not(.ghost):not(.small), \n.step-num[_ngcontent-%COMP%], \n.step-badge[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%]:not(.light) {\n  background: linear-gradient(135deg, var(--stack-docs-primary), #5c6bc0);\n  color: #ffffff;\n}\n\n.btn.secondary[_ngcontent-%COMP%], \n.demo-link[_ngcontent-%COMP%], \n.example-link[_ngcontent-%COMP%], \nbutton.secondary[_ngcontent-%COMP%], \nbutton.ghost[_ngcontent-%COMP%], \nbutton.small[_ngcontent-%COMP%], \n.clear-btn[_ngcontent-%COMP%], \n.copy-button[_ngcontent-%COMP%], \n.mini-button[_ngcontent-%COMP%], \n.custom-pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.meta-pill.light[_ngcontent-%COMP%] {\n  border-color: var(--stack-docs-border);\n  color: #17324d;\n}\n\npre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.state[_ngcontent-%COMP%], \n.step[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-block[_ngcontent-%COMP%], \n.code-preview[_ngcontent-%COMP%] {\n  background: #1f2438;\n  color: #eef3ff;\n}\n\n@media (max-width: 980px) {\n  .hero[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%], \n   .example-shell[_ngcontent-%COMP%], \n   .example-explorer[_ngcontent-%COMP%], \n   .quickstart-grid[_ngcontent-%COMP%], \n   .docs-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n\n  .demo-nav[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%] {\n    position: static;\n    top: auto;\n    max-height: none;\n  }\n\n  .ref-grid[_ngcontent-%COMP%], \n   .results-grid[_ngcontent-%COMP%], \n   .control-grid[_ngcontent-%COMP%], \n   .api-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%], \n   .demo-grid[_ngcontent-%COMP%], \n   .toggle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 16px 12px 36px !important;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%], \n   .sidebar-card[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%], \n   .demo-stage[_ngcontent-%COMP%], \n   .example-stage[_ngcontent-%COMP%] {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2rem, 13vw, 3rem);\n    line-height: 1.02;\n  }\n\n  .cta-row[_ngcontent-%COMP%], \n   .release-links[_ngcontent-%COMP%], \n   .controls[_ngcontent-%COMP%], \n   .toolbar[_ngcontent-%COMP%], \n   .example-stage-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .btn[_ngcontent-%COMP%], \n   .release-link[_ngcontent-%COMP%], \n   button[_ngcontent-%COMP%], \n   .copy-button[_ngcontent-%COMP%], \n   .clear-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .table-head[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \narticle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  line-height: 1.02;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.preview-frame[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.install-card[_ngcontent-%COMP%], \n.copy-card[_ngcontent-%COMP%], \n.card-shell[_ngcontent-%COMP%], \n.showcase-card[_ngcontent-%COMP%], \n.docs-card[_ngcontent-%COMP%], \n.docs-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.badge[_ngcontent-%COMP%], \n.hero-badge[_ngcontent-%COMP%], \n.version-pill[_ngcontent-%COMP%], \n.release-pill[_ngcontent-%COMP%] {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(2rem, 11vw, 3.15rem);\n  }\n}\n\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(1.7rem, 8vw, 2.65rem) !important;\n    line-height: 0.98 !important;\n    letter-spacing: -0.035em !important;\n    word-break: break-all;\n  }\n}\n\n\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \narticle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child, \narticle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%], \n.docs-layout[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%], \n.hero-grid[_ngcontent-%COMP%], \n.content-grid[_ngcontent-%COMP%], \n.playground-shell[_ngcontent-%COMP%], \n.playground__grid[_ngcontent-%COMP%], \n.example-shell[_ngcontent-%COMP%], \n.example-explorer[_ngcontent-%COMP%], \n.quickstart-grid[_ngcontent-%COMP%], \n.workbench-grid[_ngcontent-%COMP%], \n.release-links[_ngcontent-%COMP%], \n.cta-row[_ngcontent-%COMP%], \n.controls[_ngcontent-%COMP%], \n.hero-actions[_ngcontent-%COMP%], \n.inline-actions[_ngcontent-%COMP%], \n.playground-actions[_ngcontent-%COMP%], \n.playground-preview-tabs[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%], \n.field.two-up[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.playground-controls[_ngcontent-%COMP%], \n.playground-preview[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.docs-panel[_ngcontent-%COMP%], \n.docs-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.copy-card[_ngcontent-%COMP%], \n.install-card[_ngcontent-%COMP%], \n.card-shell[_ngcontent-%COMP%], \n.hero-copy[_ngcontent-%COMP%], \n.hero-setup[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.badge[_ngcontent-%COMP%], \n.hero-badge[_ngcontent-%COMP%], \n.version-pill[_ngcontent-%COMP%], \n.release-pill[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%], \n.release-link[_ngcontent-%COMP%] {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\npre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.code-block[_ngcontent-%COMP%], \n.code-preview[_ngcontent-%COMP%], \n.snippet[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n@media (max-width: 760px) {\n  .release-links[_ngcontent-%COMP%], \n   .cta-row[_ngcontent-%COMP%], \n   .controls[_ngcontent-%COMP%], \n   .hero-actions[_ngcontent-%COMP%], \n   .inline-actions[_ngcontent-%COMP%], \n   .playground-actions[_ngcontent-%COMP%], \n   .toolbar[_ngcontent-%COMP%], \n   .example-stage-header[_ngcontent-%COMP%], \n   .playground-preview-tabs[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: 1fr !important;\n    align-items: stretch;\n  }\n\n  .release-link[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   .button[_ngcontent-%COMP%], \n   .ghost-button[_ngcontent-%COMP%], \n   button[_ngcontent-%COMP%], \n   .copy-button[_ngcontent-%COMP%], \n   .clear-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .playground-shell[_ngcontent-%COMP%], \n   .playground__grid[_ngcontent-%COMP%], \n   .example-shell[_ngcontent-%COMP%], \n   .example-explorer[_ngcontent-%COMP%], \n   .quickstart-grid[_ngcontent-%COMP%], \n   .workbench-grid[_ngcontent-%COMP%], \n   .demo-grid[_ngcontent-%COMP%], \n   .api-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%], \n   .results-grid[_ngcontent-%COMP%], \n   .control-grid[_ngcontent-%COMP%], \n   .toggle-grid[_ngcontent-%COMP%], \n   .meta-grid[_ngcontent-%COMP%], \n   .page-grid[_ngcontent-%COMP%], \n   .surface-card-grid[_ngcontent-%COMP%], \n   .hero-grid[_ngcontent-%COMP%], \n   .content-grid[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%], \n   .docs-layout[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n\n  .field.two-up[_ngcontent-%COMP%], \n   .playground-table-head[_ngcontent-%COMP%], \n   .playground-table-row[_ngcontent-%COMP%], \n   .table-head[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child, \n   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(1.55rem, 7vw, 2.35rem) !important;\n    line-height: 1.03 !important;\n    letter-spacing: -0.03em !important;\n  }\n\n  .app-shell[_ngcontent-%COMP%], \n   .shell[_ngcontent-%COMP%], \n   .docs-page[_ngcontent-%COMP%], \n   .page-shell[_ngcontent-%COMP%], \n   #app[_ngcontent-%COMP%], \n   .docs-shell[_ngcontent-%COMP%] {\n    padding-left: 14px !important;\n    padding-right: 14px !important;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%], \n   .sidebar-card[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%], \n   .demo-stage[_ngcontent-%COMP%], \n   .example-stage[_ngcontent-%COMP%], \n   .playground-controls[_ngcontent-%COMP%], \n   .playground-preview[_ngcontent-%COMP%], \n   .api-card[_ngcontent-%COMP%], \n   .preview-card[_ngcontent-%COMP%], \n   .surface-card[_ngcontent-%COMP%], \n   .table-shell[_ngcontent-%COMP%], \n   .docs-card[_ngcontent-%COMP%], \n   .docs-panel[_ngcontent-%COMP%] {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .badge[_ngcontent-%COMP%], \n   .hero-badge[_ngcontent-%COMP%], \n   .version-pill[_ngcontent-%COMP%], \n   .release-pill[_ngcontent-%COMP%], \n   .meta-pill[_ngcontent-%COMP%], \n   .release-link[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n\n  pre[_ngcontent-%COMP%], \n   .code[_ngcontent-%COMP%], \n   .code-block[_ngcontent-%COMP%], \n   .code-preview[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdEQUF3RDtFQUN4RCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0U7OztXQUdTO0VBQ1QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztFQUlFLDhDQUE4QztFQUM5Qyx1QkFBdUI7QUFDekI7O0FBRUE7Ozs7OztFQU1FLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWiwwREFBMEQ7RUFDMUQsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7O0VBT0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULDJDQUEyQztFQUMzQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtBQUM1Qjs7QUFFQTs7O0VBR0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBOzs7SUFHRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBOzs7SUFHRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBOzs7O0lBSUUsZUFBZTtFQUNqQjtBQUNGOzs7QUFHQSxnQ0FBZ0M7QUFDaEM7RUFDRSwrQ0FBK0M7RUFDL0Msa0NBQWtDO0VBQ2xDLDRDQUE0QztFQUM1QyxtREFBbUQ7RUFDbkQsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLDBGQUEwRjtBQUM1Rjs7QUFFQTtFQUNFOzs7a0VBR2dFO0VBQ2hFLDZCQUE2QjtBQUMvQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLHFDQUFxQztFQUNyQyxzQ0FBc0M7RUFDdEMsb0NBQW9DO0FBQ3RDOztBQUVBOzs7O0VBSUUsMENBQTBDO0VBQzFDLGdDQUFnQztFQUNoQyxpREFBaUQ7QUFDbkQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0VBY0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSxvRkFBb0Y7RUFDcEYsc0NBQXNDO0FBQ3hDOztBQUVBOzs7Ozs7OztFQVFFLHVFQUF1RTtFQUN2RSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7Ozs7OztFQVdFLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7O0VBT0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTs7Ozs7O0lBTUUscUNBQXFDO0VBQ3ZDOztFQUVBOzs7SUFHRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTs7Ozs7OztJQU9FLHFDQUFxQztFQUN2QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7Ozs7Ozs7OztJQVNFLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7O0lBRUUsa0NBQWtDO0lBQ2xDLGlCQUFpQjtFQUNuQjs7RUFFQTs7Ozs7SUFLRSxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCOztFQUVBOzs7OztJQUtFLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxnREFBZ0Q7RUFDbEQ7QUFDRjs7QUFFQSxpQ0FBaUM7QUFDakM7Ozs7O0VBS0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7Ozs7Ozs7O0VBYUUsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTs7Ozs7SUFLRSxxQ0FBcUM7RUFDdkM7QUFDRjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRTs7Ozs7SUFLRSxpREFBaUQ7SUFDakQsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxxQkFBcUI7RUFDdkI7QUFDRjs7O0FBR0EsMENBQTBDO0FBQzFDOzs7Ozs7Ozs7Ozs7RUFZRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJDRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7OztFQU1FLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7Ozs7RUFNRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7Ozs7Ozs7OztJQVNFLHdCQUF3QjtJQUN4QixxQ0FBcUM7SUFDckMsb0JBQW9CO0VBQ3RCOztFQUVBOzs7Ozs7O0lBT0UsV0FBVztFQUNiOztFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CRSxxQ0FBcUM7RUFDdkM7O0VBRUE7Ozs7O0lBS0UsMkRBQTJEO0VBQzdEO0FBQ0Y7O0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7O0lBWUUsa0RBQWtEO0lBQ2xELDRCQUE0QjtJQUM1QixrQ0FBa0M7RUFDcEM7O0VBRUE7Ozs7OztJQU1FLDZCQUE2QjtJQUM3Qiw4QkFBOEI7RUFDaEM7O0VBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJFLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7Ozs7OztJQU1FLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7O0VBRUE7Ozs7SUFJRSxlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNvbG9yOiAjMTczMjRkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyIE5leHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGVsbCB7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgcmdiYSgxMiwgMTE1LCAxODQsIDAuMTQpLCB0cmFuc3BhcmVudCAzMiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIHJpZ2h0LCByZ2JhKDIxNCwgOTAsIDM3LCAwLjE4KSwgdHJhbnNwYXJlbnQgMzQlKSxcbiAgICAjZjVmN2ZiO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBjbGlwO1xuICBwYWRkaW5nOiAzMnB4IDIwcHggNjBweDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG5wLFxudGQsXG50aCxcbmJ1dHRvbixcbmlucHV0LFxubGFiZWwge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5jb2RlLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLmhlcm8ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxLjdmcikgbWlubWF4KDMwMHB4LCAxZnIpO1xuICBtYXJnaW46IDAgMCAxLjVyZW07XG59XG5cbi5oZXJvLW1haW4sXG4uaGVyby1zZXR1cCxcbi5wYW5lbCxcbi5wYW5lbHMsXG4uZGVtby1jYXJkLFxuLnJlZi1jYXJkLFxuLnJlbGVhc2UtY2FyZCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmhlcm8tY2FyZCxcbi5wYW5lbCxcbi5sb2ctcGFuZWwge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkxLCAyMDYsIDIyMywgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDYwcHggcmdiYSgyMywgNTAsIDc3LCAwLjEyKTtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAxLjRyZW07XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICMxNzMyNGQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC42NXJlbTtcbn1cblxuLmhlcm8tbWFpbiBoMSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMi40cmVtLCA0dncsIDMuNHJlbSk7XG4gIG1hcmdpbjogMCAwIDAuODVyZW07XG59XG5cbi5oZXJvLW1haW4gcCxcbi5wYW5lbC1oZWFkZXIgcCxcbi5sb2ctcGFuZWwgcCxcbi5mZWF0dXJlLFxuLmZvb3RlciBwIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5mZWF0dXJlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBtYXJnaW46IDEuMjVyZW0gMDtcbn1cblxuLmZlYXR1cmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTEsIDAuOTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAwLjk1cmVtIDFyZW07XG59XG5cbi5mZWF0dXJlIHN0cm9uZyB7XG4gIGNvbG9yOiAjMTczMjRkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4uY3RhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5idG4ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYzE1ZDNmLCAjOWU0YTMxKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNzJyZW0gMS4xcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG4uc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjN2Q0ZTI7XG4gIGNvbG9yOiAjMTczMjRkO1xufVxuXG4uaGVyby1zZXR1cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byAxZnI7XG59XG5cbi5oZXJvLXNldHVwIGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3RlcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC44cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWlubWF4KDAsIDFmcik7XG59XG5cbi5zdGVwID4gZGl2IHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uc3RlcC1udW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMGM3M2I4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiAxLjlyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMS45cmVtO1xufVxuXG4uaGVyby1zZXR1cCBwcmUsXG4uY29kZSxcbi5zdGF0ZSB7XG4gIGJhY2tncm91bmQ6ICMxMzI2M2E7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGNvbG9yOiAjZWRmNGZiO1xuICBmb250LXNpemU6IDAuODNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMC41NXJlbSAwIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgcGFkZGluZzogMC45NXJlbSAxcmVtO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5sYXlvdXQge1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAyODBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucGFuZWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuXG4ucGFuZWwtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnBhbmVsLWhlYWRlciBoMixcbi5sb2ctcGFuZWwgaDIsXG4ucmVsZWFzZS1jYXJkIGgzIHtcbiAgbWFyZ2luOiAwIDAgMC40cmVtO1xufVxuXG4uZGVtby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cblxuLmRlbW8tY2FyZCxcbi5yZWYtY2FyZCxcbi5yZWxlYXNlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmRlbW8tY2FyZCBoMyxcbi5yZWYtY2FyZCBoNCB7XG4gIG1hcmdpbjogMCAwIDAuNDVyZW07XG59XG5cbi5kcm9wZG93bi1mcmFtZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLmRyb3Bkb3duLWZyYW1lIGZvcm0sXG4uZHJvcGRvd24tZnJhbWUgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5kcm9wZG93bi1mcmFtZSBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24gLm11bHRpc2VsZWN0LWRyb3Bkb3duLFxuOjpuZy1kZWVwIG5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4sXG46Om5nLWRlZXAgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWxpc3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuOjpuZy1kZWVwIG5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5zZWxlY3RlZC1pdGVtLWNvbnRhaW5lcixcbjo6bmctZGVlcCBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biAuc2VsZWN0ZWQtaXRlbSB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi10b3A6IDAuOXJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjcycmVtIDFyZW07XG59XG5cbmJ1dHRvbi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMTUsIDE4NCwgMC4xKTtcbiAgY29sb3I6ICMwYzczYjg7XG59XG5cbmJ1dHRvbi5naG9zdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzdkNGUyO1xuICBjb2xvcjogIzE3MzI0ZDtcbn1cblxuYnV0dG9uLnNtYWxsIHtcbiAgcGFkZGluZzogMC40NXJlbSAwLjhyZW07XG59XG5cbi5zdGF0ZSB7XG4gIG1hcmdpbi10b3A6IDAuODVyZW07XG59XG5cbi5yZWYtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xufVxuXG4uYXBpLXRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcGktdGFibGUgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgcGFkZGluZzogMC43cmVtIDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hcGktdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzE3MzI0ZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDElO1xufVxuXG4ubG9nLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxcmVtO1xufVxuXG4ubG9nLXBhbmVsLWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9nLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNjVyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5yZWxlYXNlLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNjVyZW07XG59XG5cbi5sb2ctZW50cnksXG4ucmVsZWFzZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjUxLCAwLjkyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgY29sb3I6ICMxNzMyNGQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuODVyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW46IDEuMjVyZW0gMCAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZXJvLFxuICAubGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGdhcDogMThweDtcbiAgfVxuXG4gIC5sb2ctcGFuZWwge1xuICAgIG9yZGVyOiAyO1xuICAgIG1heC1oZWlnaHQ6IG1pbigzNjBweCwgNTB2aCk7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLnJlZi1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcbiAgLnNoZWxsIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE0cHggNDJweDtcbiAgfVxuXG4gIC5mZWF0dXJlLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnN0ZXAge1xuICAgIGdhcDogMC41NXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5hcGktdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5oZXJvLW1haW4gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4xcmVtLCAxMnZ3LCAzcmVtKTtcbiAgfVxuXG4gIC5jdGEtcm93IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaGVyby1jYXJkLFxuICAucGFuZWwsXG4gIC5sb2ctcGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5oZXJvLXNldHVwIHByZSxcbiAgLmNvZGUsXG4gIC5zdGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc2hlbGwge1xuICAgIHBhZGRpbmc6IDE2cHggMTJweCAzNnB4O1xuICB9XG5cbiAgLmZlYXR1cmUsXG4gIC5kZW1vLWNhcmQsXG4gIC5yZWYtY2FyZCxcbiAgLnJlbGVhc2UtY2FyZCB7XG4gICAgcGFkZGluZzogMC45cmVtO1xuICB9XG59XG5cblxuLyogc3RhY2tsaW5lLWRvY3MtcmVmcmVzaC0yMDI2ICovXG46aG9zdCB7XG4gIC0tc3RhY2stZG9jcy1zdXJmYWNlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICAtLXN0YWNrLWRvY3Mtc3VyZmFjZS1zb2Z0OiAjZWVmNGZiO1xuICAtLXN0YWNrLWRvY3MtYm9yZGVyOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjE0KTtcbiAgLS1zdGFjay1kb2NzLWJvcmRlci1zdHJvbmc6IHJnYmEoNjMsIDgxLCAxODEsIDAuMjIpO1xuICAtLXN0YWNrLWRvY3MtdGV4dDogIzIxMjEyMTtcbiAgLS1zdGFjay1kb2NzLW11dGVkOiAjNjE2MTYxO1xuICAtLXN0YWNrLWRvY3MtcHJpbWFyeTogIzNmNTFiNTtcbiAgLS1zdGFjay1kb2NzLXByaW1hcnktc29mdDogI2U4ZWFmNjtcbiAgLS1zdGFjay1kb2NzLXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMzMsIDMzLCAzMywgMC4xMiksIDAgMThweCA0NHB4IHJnYmEoNjMsIDgxLCAxODEsIDAuMDgpO1xufVxuXG4uc2hlbGwge1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIHJpZ2h0LCByZ2JhKDYzLCA4MSwgMTgxLCAwLjE0KSwgdHJhbnNwYXJlbnQgMjglKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGxlZnQgMTglLCByZ2JhKDIzLCA1MCwgNzcsIDAuMDgpLCB0cmFuc3BhcmVudCAyNiUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGY5ZmMgMCUsICNmNWY3ZmIgNDQlLCAjZWVmMmY4IDEwMCUpO1xuICBjb2xvcjogdmFyKC0tc3RhY2stZG9jcy10ZXh0KTtcbn1cblxuLmhlcm8tY2FyZCxcbi5wYW5lbCxcbi5sb2ctcGFuZWwsXG4uc2lkZWJhcixcbi5zaWRlYmFyLWNhcmQsXG4uZGVtby1jYXJkLFxuLnJlZi1jYXJkLFxuLnJlbGVhc2UtY2FyZCxcbi5kZW1vLWdyb3VwLFxuLmRlbW8tc3RhZ2UsXG4uY29udHJvbHMtY2FyZCxcbi5wbGF5Z3JvdW5kLWNhcmQsXG4ucmVzdWx0LWNhcmQsXG4uYXBpLWNhcmQsXG4ucHJldmlldy1jYXJkLFxuLnN1cmZhY2UtY2FyZCxcbi50YWJsZS1zaGVsbCxcbi5leGFtcGxlLXN0YWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3RhY2stZG9jcy1zdXJmYWNlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdGFjay1kb2NzLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXN0YWNrLWRvY3Mtc2hhZG93KTtcbn1cblxuLmJhZGdlLFxuLm1ldGEtcGlsbCxcbi5zdGFnZS1waWxsLFxuLnJlbGVhc2UtbGluayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0YWNrLWRvY3MtcHJpbWFyeS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLXN0YWNrLWRvY3MtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0YWNrLWRvY3MtYm9yZGVyLXN0cm9uZyk7XG59XG5cbi5oZXJvLW1haW4gcCxcbi5wYW5lbC1oZWFkZXIgcCxcbi5sb2ctcGFuZWwgcCxcbi5mZWF0dXJlLFxuLmRlbW8tbm90ZSxcbi5oaXN0b3J5LWNvcHksXG4ucmVsZWFzZS1pdGVtLFxuLmZvb3RlciBwLFxuLmZpZWxkIGxhYmVsLFxuLnJlc3VsdC1jYXJkIHN0cm9uZyxcbi5hcGktdGFibGUgdGgsXG4uYXBpLXJvdyBzdHJvbmcsXG4uZGVtby1icmVhZGNydW1iLFxuLmV4YW1wbGUtc3RhZ2UtaGVhZGVyIHAge1xuICBjb2xvcjogdmFyKC0tc3RhY2stZG9jcy1tdXRlZCk7XG59XG5cbi5mZWF0dXJlLFxuLmRlbW8tY2FyZCxcbi5yZWYtY2FyZCxcbi5yZWxlYXNlLWNhcmQsXG4uZGVtby1ncm91cCxcbi5kZW1vLXN0YWdlLFxuLmNvbnRyb2xzLWNhcmQsXG4ucGxheWdyb3VuZC1jYXJkLFxuLnJlc3VsdC1jYXJkLFxuLmFwaS1jYXJkLFxuLnByZXZpZXctY2FyZCxcbi5zdXJmYWNlLWNhcmQsXG4uZXhhbXBsZS1zdGFnZSxcbi50YWJsZS1ob3N0LFxuLnRvZ2dsZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgdmFyKC0tc3RhY2stZG9jcy1zdXJmYWNlLXNvZnQpIDEwMCUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXN0YWNrLWRvY3MtYm9yZGVyKTtcbn1cblxuLmJ0bixcbi5yZWxlYXNlLWxpbmsuaXMtY3VycmVudCxcbi5kZW1vLWxpbmsuYWN0aXZlLFxuLmV4YW1wbGUtbGluay5hY3RpdmUsXG5idXR0b246bm90KC5zZWNvbmRhcnkpOm5vdCguZ2hvc3QpOm5vdCguc21hbGwpLFxuLnN0ZXAtbnVtLFxuLnN0ZXAtYmFkZ2UsXG4ubWV0YS1waWxsOm5vdCgubGlnaHQpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tc3RhY2stZG9jcy1wcmltYXJ5KSwgIzVjNmJjMCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuLnNlY29uZGFyeSxcbi5kZW1vLWxpbmssXG4uZXhhbXBsZS1saW5rLFxuYnV0dG9uLnNlY29uZGFyeSxcbmJ1dHRvbi5naG9zdCxcbmJ1dHRvbi5zbWFsbCxcbi5jbGVhci1idG4sXG4uY29weS1idXR0b24sXG4ubWluaS1idXR0b24sXG4uY3VzdG9tLXBhZ2VyIGJ1dHRvbixcbi5tZXRhLXBpbGwubGlnaHQge1xuICBib3JkZXItY29sb3I6IHZhcigtLXN0YWNrLWRvY3MtYm9yZGVyKTtcbiAgY29sb3I6ICMxNzMyNGQ7XG59XG5cbnByZSxcbi5jb2RlLFxuLnN0YXRlLFxuLnN0ZXAgcHJlLFxuLmNvZGUtY2FyZCBwcmUsXG4uY29kZS1ibG9jayxcbi5jb2RlLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiAjMWYyNDM4O1xuICBjb2xvcjogI2VlZjNmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5oZXJvLFxuICAubGF5b3V0LFxuICAuZXhhbXBsZS1zaGVsbCxcbiAgLmV4YW1wbGUtZXhwbG9yZXIsXG4gIC5xdWlja3N0YXJ0LWdyaWQsXG4gIC5kb2NzLWxheW91dCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZW1vLW5hdixcbiAgLnNpZGViYXIsXG4gIC5sb2ctcGFuZWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdG9wOiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cblxuICAucmVmLWdyaWQsXG4gIC5yZXN1bHRzLWdyaWQsXG4gIC5jb250cm9sLWdyaWQsXG4gIC5hcGktZ3JpZCxcbiAgLmZlYXR1cmUtZ3JpZCxcbiAgLmRlbW8tZ3JpZCxcbiAgLnRvZ2dsZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuc2hlbGwge1xuICAgIHBhZGRpbmc6IDE2cHggMTJweCAzNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaGVyby1jYXJkLFxuICAucGFuZWwsXG4gIC5sb2ctcGFuZWwsXG4gIC5zaWRlYmFyLWNhcmQsXG4gIC5kZW1vLWNhcmQsXG4gIC5yZWYtY2FyZCxcbiAgLnJlbGVhc2UtY2FyZCxcbiAgLmRlbW8tc3RhZ2UsXG4gIC5leGFtcGxlLXN0YWdlIHtcbiAgICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgfVxuXG4gIC5oZXJvLW1haW4gaDEsXG4gIGgxIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDEzdncsIDNyZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjAyO1xuICB9XG5cbiAgLmN0YS1yb3csXG4gIC5yZWxlYXNlLWxpbmtzLFxuICAuY29udHJvbHMsXG4gIC50b29sYmFyLFxuICAuZXhhbXBsZS1zdGFnZS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAuYnRuLFxuICAucmVsZWFzZS1saW5rLFxuICBidXR0b24sXG4gIC5jb3B5LWJ1dHRvbixcbiAgLmNsZWFyLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGFibGUtaGVhZCxcbiAgLnRhYmxlLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbi8qIHN0YWNrbGluZS1kb2NzLXdyYXAtZml4LTIwMjYgKi9cbi5oZXJvLW1haW4gaDEsXG4uaGVybyBoMSxcbi5wYWdlLWhlYWRlciBoMSxcbi5kb2NzLWhlcm8gaDEsXG5hcnRpY2xlIGgxOmZpcnN0LWNoaWxkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDEuMDI7XG59XG5cbi5oZXJvLWNhcmQsXG4ucGFuZWwsXG4uc2lkZWJhci1jYXJkLFxuLmRlbW8tY2FyZCxcbi5wcmV2aWV3LWZyYW1lLFxuLnN1cmZhY2UtY2FyZCxcbi50YWJsZS1zaGVsbCxcbi5pbnN0YWxsLWNhcmQsXG4uY29weS1jYXJkLFxuLmNhcmQtc2hlbGwsXG4uc2hvd2Nhc2UtY2FyZCxcbi5kb2NzLWNhcmQsXG4uZG9jcy1wYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmJhZGdlLFxuLmhlcm8tYmFkZ2UsXG4udmVyc2lvbi1waWxsLFxuLnJlbGVhc2UtcGlsbCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaGVyby1tYWluIGgxLFxuICAuaGVybyBoMSxcbiAgLnBhZ2UtaGVhZGVyIGgxLFxuICAuZG9jcy1oZXJvIGgxLFxuICBhcnRpY2xlIGgxOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDExdncsIDMuMTVyZW0pO1xuICB9XG59XG5cbi8qIHN0YWNrbGluZS1kb2NzLW1vYmlsZS10aXRsZS1maXgtMjAyNiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5oZXJvLW1haW4gaDEsXG4gIC5oZXJvIGgxLFxuICAucGFnZS1oZWFkZXIgaDEsXG4gIC5kb2NzLWhlcm8gaDEsXG4gIGFydGljbGUgaDE6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLCA4dncsIDIuNjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDAuOTggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW0gIWltcG9ydGFudDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIH1cbn1cblxuXG4vKiBzdGFja2xpbmUtZG9jcy1tb2JpbGUtbGF5b3V0LWZpeC0yMDI2ICovXG4uaGVyby1tYWluIGgxLFxuLmhlcm8tbWFpbiBoMixcbi5oZXJvLWNhcmQgaDEsXG4uaGVyby1jYXJkIGgyLFxuLmhlcm8gaDEsXG4uaGVybyBoMixcbi5wYWdlLWhlYWRlciBoMSxcbi5wYWdlLWhlYWRlciBoMixcbi5kb2NzLWhlcm8gaDEsXG4uZG9jcy1oZXJvIGgyLFxuYXJ0aWNsZSBoMTpmaXJzdC1jaGlsZCxcbmFydGljbGUgaDI6Zmlyc3QtY2hpbGQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ubGF5b3V0LFxuLmRvY3MtbGF5b3V0LFxuLmhlcm8sXG4uaGVyby1ncmlkLFxuLmNvbnRlbnQtZ3JpZCxcbi5wbGF5Z3JvdW5kLXNoZWxsLFxuLnBsYXlncm91bmRfX2dyaWQsXG4uZXhhbXBsZS1zaGVsbCxcbi5leGFtcGxlLWV4cGxvcmVyLFxuLnF1aWNrc3RhcnQtZ3JpZCxcbi53b3JrYmVuY2gtZ3JpZCxcbi5yZWxlYXNlLWxpbmtzLFxuLmN0YS1yb3csXG4uY29udHJvbHMsXG4uaGVyby1hY3Rpb25zLFxuLmlubGluZS1hY3Rpb25zLFxuLnBsYXlncm91bmQtYWN0aW9ucyxcbi5wbGF5Z3JvdW5kLXByZXZpZXctdGFicyxcbi5maWVsZCxcbi5maWVsZC50d28tdXAsXG4uc2lkZWJhcixcbi5zaWRlYmFyLWNhcmQsXG4ucGFuZWwsXG4uZGVtby1jYXJkLFxuLnBsYXlncm91bmQtY2FyZCxcbi5wbGF5Z3JvdW5kLWNvbnRyb2xzLFxuLnBsYXlncm91bmQtcHJldmlldyxcbi5yZXN1bHQtY2FyZCxcbi5jb250cm9scy1jYXJkLFxuLnJlbGVhc2UtY2FyZCxcbi5hcGktY2FyZCxcbi5wcmV2aWV3LWNhcmQsXG4uZXhhbXBsZS1zdGFnZSxcbi5kZW1vLXN0YWdlLFxuLmRvY3MtcGFuZWwsXG4uZG9jcy1jYXJkLFxuLnRhYmxlLXNoZWxsLFxuLnN1cmZhY2UtY2FyZCxcbi5jb3B5LWNhcmQsXG4uaW5zdGFsbC1jYXJkLFxuLmNhcmQtc2hlbGwsXG4uaGVyby1jb3B5LFxuLmhlcm8tc2V0dXAge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5iYWRnZSxcbi5oZXJvLWJhZGdlLFxuLnZlcnNpb24tcGlsbCxcbi5yZWxlYXNlLXBpbGwsXG4ubWV0YS1waWxsLFxuLnJlbGVhc2UtbGluayB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbnByZSxcbi5jb2RlLFxuLmNvZGUtYmxvY2ssXG4uY29kZS1wcmV2aWV3LFxuLnNuaXBwZXQgcHJlLFxuLmNvZGUtY2FyZCBwcmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAucmVsZWFzZS1saW5rcyxcbiAgLmN0YS1yb3csXG4gIC5jb250cm9scyxcbiAgLmhlcm8tYWN0aW9ucyxcbiAgLmlubGluZS1hY3Rpb25zLFxuICAucGxheWdyb3VuZC1hY3Rpb25zLFxuICAudG9vbGJhcixcbiAgLmV4YW1wbGUtc3RhZ2UtaGVhZGVyLFxuICAucGxheWdyb3VuZC1wcmV2aWV3LXRhYnMge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgLnJlbGVhc2UtbGluayxcbiAgLmJ0bixcbiAgLmJ1dHRvbixcbiAgLmdob3N0LWJ1dHRvbixcbiAgYnV0dG9uLFxuICAuY29weS1idXR0b24sXG4gIC5jbGVhci1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBsYXlncm91bmQtc2hlbGwsXG4gIC5wbGF5Z3JvdW5kX19ncmlkLFxuICAuZXhhbXBsZS1zaGVsbCxcbiAgLmV4YW1wbGUtZXhwbG9yZXIsXG4gIC5xdWlja3N0YXJ0LWdyaWQsXG4gIC53b3JrYmVuY2gtZ3JpZCxcbiAgLmRlbW8tZ3JpZCxcbiAgLmFwaS1ncmlkLFxuICAuZmVhdHVyZS1ncmlkLFxuICAucmVzdWx0cy1ncmlkLFxuICAuY29udHJvbC1ncmlkLFxuICAudG9nZ2xlLWdyaWQsXG4gIC5tZXRhLWdyaWQsXG4gIC5wYWdlLWdyaWQsXG4gIC5zdXJmYWNlLWNhcmQtZ3JpZCxcbiAgLmhlcm8tZ3JpZCxcbiAgLmNvbnRlbnQtZ3JpZCxcbiAgLmxheW91dCxcbiAgLmRvY3MtbGF5b3V0LFxuICAuaGVybyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5maWVsZC50d28tdXAsXG4gIC5wbGF5Z3JvdW5kLXRhYmxlLWhlYWQsXG4gIC5wbGF5Z3JvdW5kLXRhYmxlLXJvdyxcbiAgLnRhYmxlLWhlYWQsXG4gIC50YWJsZS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaGVyby1tYWluIGgxLFxuICAuaGVyby1tYWluIGgyLFxuICAuaGVyby1jYXJkIGgxLFxuICAuaGVyby1jYXJkIGgyLFxuICAuaGVybyBoMSxcbiAgLmhlcm8gaDIsXG4gIC5wYWdlLWhlYWRlciBoMSxcbiAgLnBhZ2UtaGVhZGVyIGgyLFxuICAuZG9jcy1oZXJvIGgxLFxuICAuZG9jcy1oZXJvIGgyLFxuICBhcnRpY2xlIGgxOmZpcnN0LWNoaWxkLFxuICBhcnRpY2xlIGgyOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNTVyZW0sIDd2dywgMi4zNXJlbSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS4wMyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXBwLXNoZWxsLFxuICAuc2hlbGwsXG4gIC5kb2NzLXBhZ2UsXG4gIC5wYWdlLXNoZWxsLFxuICAjYXBwLFxuICAuZG9jcy1zaGVsbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlcm8tY2FyZCxcbiAgLnBhbmVsLFxuICAubG9nLXBhbmVsLFxuICAuc2lkZWJhci1jYXJkLFxuICAuZGVtby1jYXJkLFxuICAucmVmLWNhcmQsXG4gIC5yZWxlYXNlLWNhcmQsXG4gIC5kZW1vLXN0YWdlLFxuICAuZXhhbXBsZS1zdGFnZSxcbiAgLnBsYXlncm91bmQtY29udHJvbHMsXG4gIC5wbGF5Z3JvdW5kLXByZXZpZXcsXG4gIC5hcGktY2FyZCxcbiAgLnByZXZpZXctY2FyZCxcbiAgLnN1cmZhY2UtY2FyZCxcbiAgLnRhYmxlLXNoZWxsLFxuICAuZG9jcy1jYXJkLFxuICAuZG9jcy1wYW5lbCB7XG4gICAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIH1cblxuICAuYmFkZ2UsXG4gIC5oZXJvLWJhZGdlLFxuICAudmVyc2lvbi1waWxsLFxuICAucmVsZWFzZS1waWxsLFxuICAubWV0YS1waWxsLFxuICAucmVsZWFzZS1saW5rIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIHByZSxcbiAgLmNvZGUsXG4gIC5jb2RlLWJsb2NrLFxuICAuY29kZS1wcmV2aWV3IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stackline/ng-multiselect-dropdown */ 5125);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);






class AppModule {
  static ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__.NgMultiSelectDropDownModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__.NgMultiSelectDropDownModule]
  });
})();

/***/ },

/***/ 5745
/*!******************************!*\
  !*** ./src/app/docs-meta.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOCS_META: () => (/* binding */ DOCS_META)
/* harmony export */ });
const DOCS_META = {
  badge: 'ANGULAR 21 FAMILY',
  angularVersion: '21.0.0 -> 21.2.8',
  packageVersion: '6.0.3',
  packageRange: '6',
  docsPath: 'angular-21'
};

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(error => console.error(error));

/***/ },

/***/ 5125
/*!*********************************************************************!*\
  !*** ../../dist-lib/fesm2022/stackline-ng-multiselect-dropdown.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSelectComponent: () => (/* binding */ MultiSelectComponent),
/* harmony export */   NgMultiSelectDropDownModule: () => (/* binding */ NgMultiSelectDropDownModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 856);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 7199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8927);






const _c0 = a0 => ({
  "dropdown-multiselect--active": a0
});
function MultiSelectComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._placeholder);
  }
}
function MultiSelectComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16)(1, "span", 17)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_4_listener($event) {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.onItemClick($event, item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const k_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", k_r4 > ctx_r0._settings.itemsShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r3.text, "\xA0");
  }
}
function MultiSelectComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r0.itemShowRemaining());
  }
}
function MultiSelectComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.isAllItemsSelected())("disabled", ctx_r0.disabled || ctx_r0.isLimitSelectionReached());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r0.isAllItemsSelected() ? ctx_r0._settings.selectAllText : ctx_r0._settings.unSelectAllText);
  }
}
function MultiSelectComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22)(1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r0.filter.text, $event) || (ctx_r0.filter.text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.onFilterTextChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", ctx_r0.disabled)("placeholder", ctx_r0._settings.searchPlaceholderText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.filter.text);
  }
}
function MultiSelectComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.onItemClick($event, item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.isSelected(item_r8))("disabled", ctx_r0.disabled || ctx_r0.isLimitSelectionReached() && !ctx_r0.isSelected(item_r8) || item_r8.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", item_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.text);
  }
}
function MultiSelectComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 26)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._settings.noFilteredDataAvailablePlaceholderText);
  }
}
function MultiSelectComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 27)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._settings.noDataAvailablePlaceholderText);
  }
}
class ListItem {
  id;
  text;
  isDisabled;
  constructor(source) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.id = this.text = source;
      this.isDisabled = false;
    }
    if (typeof source === 'object') {
      this.id = source.id;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
    }
  }
}
class ListFilterPipe {
  transform(items, filter) {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => this.applyFilter(item, filter));
  }
  applyFilter(item, filter) {
    if (typeof item.text === 'string' && typeof filter.text === 'string') {
      return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
    } else {
      return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
    }
  }
  static ɵfac = function ListFilterPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ListFilterPipe)();
  };
  static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "multiSelectFilter",
    type: ListFilterPipe,
    pure: false,
    standalone: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(ListFilterPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'multiSelectFilter',
      pure: false,
      standalone: false
    }]
  }], null, null);
})();
class ClickOutsideDirective {
  _elementRef;
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onClick(event, targetElement) {
    if (!(targetElement instanceof HTMLElement)) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
  static ɵfac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: ClickOutsideDirective,
    selectors: [["", "clickOutside", ""]],
    hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event, $event.target);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
      }
    },
    outputs: {
      clickOutside: "clickOutside"
    },
    standalone: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(ClickOutsideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[clickOutside]',
      standalone: false
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }], {
    clickOutside: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['document:click', ['$event', '$event.target']]
    }]
  });
})();
const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MultiSelectComponent),
  multi: true
};
const noop = () => {};
class MultiSelectComponent {
  listFilterPipe;
  cdr;
  defaultSettings = {
    singleSelection: false,
    idField: "id",
    textField: "text",
    disabledField: "isDisabled",
    enableCheckAll: true,
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    allowSearchFilter: false,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 999999999999,
    searchPlaceholderText: "Search",
    noDataAvailablePlaceholderText: "No data available",
    noFilteredDataAvailablePlaceholderText: "No filtered data available",
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: false,
    defaultOpen: false,
    allowRemoteDataSearch: false
  };
  _settings = {
    ...this.defaultSettings
  };
  _data = [];
  _sourceData = [];
  selectedItems = [];
  isDropdownOpen = false;
  _placeholder = "Select";
  _sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
  _sourceDataFields = []; // store source data fields names
  filter = new ListItem("");
  set placeholder(value) {
    if (value) {
      this._placeholder = value;
    } else {
      this._placeholder = "Select";
    }
  }
  disabled = false;
  set settings(value) {
    this._settings = value ? {
      ...this.defaultSettings,
      ...value
    } : {
      ...this.defaultSettings
    };
    this.isDropdownOpen = !!this._settings.defaultOpen;
    this.mapData(this._sourceData);
  }
  set data(value) {
    this._sourceData = value || [];
    this.mapData(this._sourceData);
  }
  get data() {
    return this._sourceData;
  }
  onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onTouchedCallback = noop;
  onChangeCallback = noop;
  onFilterTextChange($event) {
    this.onFilterChange.emit($event);
  }
  constructor(listFilterPipe, cdr) {
    this.listFilterPipe = listFilterPipe;
    this.cdr = cdr;
  }
  onItemClick($event, item) {
    if ($event?.preventDefault) {
      $event.preventDefault();
    }
    if ($event?.stopPropagation) {
      $event.stopPropagation();
    }
    if (this.disabled || item.isDisabled) {
      return false;
    }
    const found = this.isSelected(item);
    const allowAdd = this._settings.limitSelection === -1 || this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection;
    if (!found) {
      if (allowAdd) {
        this.addSelected(item);
      }
    } else {
      this.removeSelected(item);
    }
    if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
      this.closeDropdown();
    }
  }
  writeValue(value) {
    if (value !== undefined && value !== null && value.length > 0) {
      if (this._settings.singleSelection) {
        try {
          if (value.length >= 1) {
            const firstItem = value[0];
            this.selectedItems = [typeof firstItem === "string" || typeof firstItem === "number" ? new ListItem(firstItem) : new ListItem({
              id: firstItem[this._settings.idField],
              text: firstItem[this._settings.textField],
              isDisabled: firstItem[this._settings.disabledField]
            })];
          }
        } catch (e) {
          // console.error(e.body.msg);
        }
      } else {
        const _data = value.map(item => typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
          id: item[this._settings.idField],
          text: item[this._settings.textField],
          isDisabled: item[this._settings.disabledField]
        }));
        if (this._settings.limitSelection > 0) {
          this.selectedItems = _data.splice(0, this._settings.limitSelection);
        } else {
          this.selectedItems = _data;
        }
      }
    } else {
      this.selectedItems = [];
    }
    this.onChangeCallback(value);
    this.cdr.markForCheck();
  }
  // From ControlValueAccessor interface
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  // From ControlValueAccessor interface
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  // Set touched on blur
  onTouched() {
    // this.closeDropdown();
    this.onTouchedCallback();
  }
  trackByFn(index, item) {
    return item.id;
  }
  isSelected(clickedItem) {
    let found = false;
    this.selectedItems.forEach(item => {
      if (clickedItem.id === item.id) {
        found = true;
      }
    });
    return found;
  }
  isLimitSelectionReached() {
    return this._settings.limitSelection === this.selectedItems.length;
  }
  isAllItemsSelected() {
    // get disabld item count
    let filteredItems = this.listFilterPipe.transform(this._data, this.filter);
    const itemDisabledCount = filteredItems.filter(item => item.isDisabled).length;
    // take disabled items into consideration when checking
    if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
      return false;
    }
    return filteredItems.length === this.selectedItems.length + itemDisabledCount;
  }
  showButton() {
    if (!this._settings.singleSelection) {
      if (this._settings.limitSelection > 0) {
        return false;
      }
      // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
      return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
    } else {
      // should be disabled in single selection mode
      return false;
    }
  }
  itemShowRemaining() {
    return this.selectedItems.length - this._settings.itemsShowLimit;
  }
  addSelected(item) {
    if (this._settings.singleSelection) {
      this.selectedItems = [];
      this.selectedItems.push(item);
    } else {
      this.selectedItems.push(item);
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.onSelect.emit(this.emittedValue(item));
  }
  removeSelected(itemSel) {
    this.selectedItems.forEach(item => {
      if (itemSel.id === item.id) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    });
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.onDeSelect.emit(this.emittedValue(itemSel));
  }
  emittedValue(val) {
    const selected = [];
    if (Array.isArray(val)) {
      val.map(item => {
        selected.push(this.objectify(item));
      });
    } else {
      if (val) {
        return this.objectify(val);
      }
    }
    return selected;
  }
  objectify(val) {
    if (this._sourceDataType === 'object') {
      const obj = {};
      obj[this._settings.idField] = val.id;
      obj[this._settings.textField] = val.text;
      if (this._sourceDataFields.includes(this._settings.disabledField)) {
        obj[this._settings.disabledField] = val.isDisabled;
      }
      return obj;
    }
    if (this._sourceDataType === 'number') {
      return Number(val.id);
    } else {
      return val.text;
    }
  }
  toggleDropdown(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.disabled) {
      return;
    }
    this.isDropdownOpen = !this.isDropdownOpen;
    if (!this.isDropdownOpen) {
      if (this._settings.clearSearchFilter) {
        this.filter.text = "";
      }
      this.onDropDownClose.emit();
    }
  }
  closeDropdown() {
    if (!this.isDropdownOpen) {
      return;
    }
    this.isDropdownOpen = false;
    // clear search text
    if (this._settings.clearSearchFilter) {
      this.filter.text = "";
    }
    this.onDropDownClose.emit();
  }
  toggleSelectAll() {
    if (this.disabled) {
      return false;
    }
    if (!this.isAllItemsSelected()) {
      // filter out disabled item first before slicing
      this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(item => !item.isDisabled).slice();
      this.onSelectAll.emit(this.emittedValue(this.selectedItems));
    } else {
      this.selectedItems = [];
      this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
  }
  getFields(inputData) {
    const fields = [];
    if (typeof inputData !== "object") {
      return fields;
    }
    // tslint:disable-next-line:forin
    for (const prop in inputData) {
      fields.push(prop);
    }
    return fields;
  }
  mapData(value) {
    const settings = this._settings || this.defaultSettings;
    if (!value || value.length === 0) {
      this._data = [];
      return;
    }
    const firstItem = value[0];
    this._sourceDataType = typeof firstItem;
    this._sourceDataFields = this.getFields(firstItem);
    this._data = value.map(item => typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
      id: item[settings.idField],
      text: item[settings.textField],
      isDisabled: item[settings.disabledField]
    }));
  }
  static ɵfac = function MultiSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ListFilterPipe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MultiSelectComponent,
    selectors: [["ng-multiselect-dropdown"]],
    hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      placeholder: "placeholder",
      disabled: "disabled",
      settings: "settings",
      data: "data"
    },
    outputs: {
      onFilterChange: "onFilterChange",
      onDropDownClose: "onDropDownClose",
      onSelect: "onSelect",
      onDeSelect: "onDeSelect",
      onSelectAll: "onSelectAll",
      onDeSelectAll: "onDeSelectAll"
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])],
    decls: 18,
    vars: 25,
    consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], ["class", "dropdown-placeholder", 4, "ngIf"], ["class", "selected-item-container", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropdown-multiselect__caret-wrapper", 3, "ngClass"], ["class", "dropdown-multiselect__count", 4, "ngIf"], [1, "dropdown-multiselect__caret"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-filtered-data", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "dropdown-placeholder"], [1, "selected-item-container"], [1, "selected-item", 3, "hidden"], [1, "selected-item-remove", 3, "click"], [1, "dropdown-multiselect__count"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "ngModelChange", "readOnly", "placeholder", "ngModel"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "no-filtered-data"], [1, "no-data"]],
    template: function MultiSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() {
          return ctx.onTouched();
        })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() {
          return ctx.closeDropdown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) {
          return ctx.toggleDropdown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2)(4, MultiSelectComponent_span_4_Template, 6, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9)(11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 4, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "multiSelectFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "multiSelectFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MultiSelectComponent_li_17_Template, 3, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dropdown-open", ctx.isDropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, ctx.isDropdownOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isDropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 17, ctx._data, ctx.filter));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._data.length != 0 && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 20, ctx._data, ctx.filter).length == 0 && !ctx._settings.allowRemoteDataSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ClickOutsideDirective, ListFilterPipe],
    styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;display:block;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{align-items:center;border:1px solid #adadad;display:flex;flex-wrap:wrap;gap:6px;width:100%;min-height:42px;padding:6px 42px 6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px;position:relative}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-placeholder[_ngcontent-%COMP%]{color:#666;display:inline-block;max-width:100%;overflow:hidden;padding-right:4px;text-overflow:ellipsis;white-space:nowrap}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]{display:inline-flex;flex:0 1 auto;max-width:100%}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;display:inline-flex;align-items:center;gap:2px;max-width:100%}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret-wrapper[_ngcontent-%COMP%]{position:absolute;right:1px;top:1px;bottom:1px;width:40px;display:flex;align-items:center;justify-content:center;gap:4px;padding-right:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__count[_ngcontent-%COMP%]{color:#666;font-size:.85em}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;box-sizing:border-box;width:16px;height:16px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s ease}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;display:block;color:#999;border-style:solid;border-width:6px 6px 0 6px;border-color:#999999 transparent;content:\"\"}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotate(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 6px);left:0;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0px;width:100%;padding:0}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";background-color:#337ab7;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transform:rotate(-45deg) scale(1);transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_borderscale .2s ease-in;background:#337ab7}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{transform:rotate(-45deg) scale(1)}@keyframes _ngcontent-%COMP%_borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(MultiSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: "ng-multiselect-dropdown",
      standalone: false,
      providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" [class.dropdown-open]=\"isDropdownOpen\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\" class=\"dropdown-placeholder\">{{_placeholder}}</span>\n      <span *ngFor=\"let item of selectedItems; trackBy: trackByFn; let k = index\" class=\"selected-item-container\">\n        <span class=\"selected-item\" [hidden]=\"k > (this._settings.itemsShowLimit - 1)\">\n          <span>{{item.text}}&nbsp;</span>\n          <a class=\"selected-item-remove\" (click)=\"onItemClick($event,item)\">x</a>\n        </span>\n      </span>\n      <span class=\"dropdown-multiselect__caret-wrapper\" [ngClass]=\"{ 'dropdown-multiselect--active': isDropdownOpen }\">\n        <span class=\"dropdown-multiselect__count\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span class=\"dropdown-multiselect__caret\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!isDropdownOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-filtered-data' *ngIf=\"_data.length != 0 && (_data | multiSelectFilter:filter).length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noFilteredDataAvailablePlaceholderText}}</h5>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
      styles: [".multiselect-dropdown{position:relative;width:100%;display:block;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{align-items:center;border:1px solid #adadad;display:flex;flex-wrap:wrap;gap:6px;width:100%;min-height:42px;padding:6px 42px 6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px;position:relative}.multiselect-dropdown .dropdown-btn .dropdown-placeholder{color:#666;display:inline-block;max-width:100%;overflow:hidden;padding-right:4px;text-overflow:ellipsis;white-space:nowrap}.multiselect-dropdown .dropdown-btn .selected-item-container{display:inline-flex;flex:0 1 auto;max-width:100%}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;display:inline-flex;align-items:center;gap:2px;max-width:100%}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item span{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret-wrapper{position:absolute;right:1px;top:1px;bottom:1px;width:40px;display:flex;align-items:center;justify-content:center;gap:4px;padding-right:4px}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__count{color:#666;font-size:.85em}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;box-sizing:border-box;width:16px;height:16px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s ease}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;display:block;color:#999;border-style:solid;border-width:6px 6px 0 6px;border-color:#999999 transparent;content:\"\"}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotate(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;top:calc(100% + 6px);left:0;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0px;width:100%;padding:0}.dropdown-list .filter-textbox input:focus{outline:none}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";background-color:#337ab7;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]+div:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transform:rotate(-45deg) scale(1);transition:transform .2s ease-out}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{animation:borderscale .2s ease-in;background:#337ab7}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{transform:rotate(-45deg) scale(1)}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}\n"]
    }]
  }], () => [{
    type: ListFilterPipe
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    settings: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onFilterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["onFilterChange"]
    }],
    onDropDownClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["onDropDownClose"]
    }],
    onSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["onSelect"]
    }],
    onDeSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["onDeSelect"]
    }],
    onSelectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["onSelectAll"]
    }],
    onDeSelectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ["onDeSelectAll"]
    }],
    onTouched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ["blur"]
    }]
  });
})();
class NgMultiSelectDropDownModule {
  static forRoot() {
    return {
      ngModule: NgMultiSelectDropDownModule
    };
  }
  static ɵfac = function NgMultiSelectDropDownModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgMultiSelectDropDownModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NgMultiSelectDropDownModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [ListFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NgMultiSelectDropDownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
      declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
      providers: [ListFilterPipe],
      exports: [MultiSelectComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map