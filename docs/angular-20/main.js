"use strict";
(self["webpackChunkdocs_angular_20"] = self["webpackChunkdocs_angular_20"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stackline/ng-multiselect-dropdown */ 4531);
var _staticBlock;





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
  constructor(fb) {
    this.fb = fb;
    this.docsMeta = _docs_meta__WEBPACK_IMPORTED_MODULE_0__.DOCS_META;
    this.installCode = `npm install @stackline/ng-multiselect-dropdown@${this.docsMeta.packageRange}`;
    this.setupCode = [`import { FormsModule, ReactiveFormsModule } from '@angular/forms';`, `import { NgMultiSelectDropDownModule } from '@stackline/ng-multiselect-dropdown';`, ``, `@NgModule({`, `  imports: [`, `    BrowserModule,`, `    FormsModule,`, `    ReactiveFormsModule,`, `    NgMultiSelectDropDownModule.forRoot()`, `  ]`, `})`, `export class AppModule {}`].join('\n');
    this.templateCode = [`<ng-multiselect-dropdown`, `  [data]="basicCities"`, `  [settings]="basicSettings"`, `  [(ngModel)]="basicSelected"`, `  (onSelect)="onEvent('Basic example', 'select', $event)">`, `</ng-multiselect-dropdown>`].join('\n');
    this.basicTsCode = [`basicCities = [`, `  { id: 1, text: 'Toronto' },`, `  { id: 2, text: 'Lisbon' },`, `  { id: 3, text: 'Singapore' }`, `];`, ``, `basicSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  allowSearchFilter: true,`, `  itemsShowLimit: 3`, `};`].join('\n');
    this.singleTsCode = [`singleCities = ['Toronto', 'Lisbon', 'Singapore', 'Auckland'];`, ``, `singleSettings = {`, `  singleSelection: true,`, `  allowSearchFilter: true,`, `  closeDropDownOnSelection: true`, `};`].join('\n');
    this.reactiveTsCode = [`reactiveForm = this.fb.group({`, `  cities: [[{ id: 2, text: 'Template parity' }]]`, `});`, ``, `reactiveSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  enableCheckAll: false,`, `  allowSearchFilter: true`, `};`].join('\n');
    this.limitTsCode = [`limitSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  allowSearchFilter: true,`, `  limitSelection: 2,`, `  itemsShowLimit: 2`, `};`].join('\n');
    this.remoteTsCode = [`remoteSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  allowSearchFilter: true,`, `  allowRemoteDataSearch: true,`, `  noDataAvailablePlaceholderText: 'Start typing to simulate a remote query'`, `};`, ``, `onRemoteFilter(term: string) {`, `  this.remoteData = this.remoteCatalog`, `    .filter((item) => item.text.toLowerCase().includes(term.toLowerCase()));`, `}`].join('\n');
    this.disabledTsCode = [`disabledCities = [`, `  { id: 1, text: 'Toronto' },`, `  { id: 2, text: 'Lisbon', isDisabled: true },`, `  { id: 3, text: 'Singapore' }`, `];`, ``, `disabledSettings = {`, `  idField: 'id',`, `  textField: 'text',`, `  disabledField: 'isDisabled',`, `  allowSearchFilter: true,`, `  showSelectedItemsAtTop: true`, `};`].join('\n');
    this.basicCities = [{
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
    this.basicSelected = [{
      id: 2,
      text: 'Lisbon'
    }, {
      id: 4,
      text: 'Auckland'
    }];
    this.basicSettings = {
      idField: 'id',
      textField: 'text',
      allowSearchFilter: true,
      enableCheckAll: true,
      selectAllText: 'Select all',
      unSelectAllText: 'Clear all',
      itemsShowLimit: 3
    };
    this.singleCities = ['Toronto', 'Lisbon', 'Singapore', 'Auckland', 'Oslo'];
    this.singleSelected = ['Toronto'];
    this.singleSettings = {
      singleSelection: true,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.reactiveCities = [{
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
    this.reactiveSettings = {
      idField: 'id',
      textField: 'text',
      enableCheckAll: false,
      allowSearchFilter: true
    };
    this.limitCities = [{
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
    this.limitSelected = [{
      id: 1,
      text: 'Toronto'
    }];
    this.limitSettings = {
      idField: 'id',
      textField: 'text',
      allowSearchFilter: true,
      limitSelection: 2,
      itemsShowLimit: 2
    };
    this.remoteData = [];
    this.remoteSelected = [];
    this.remoteSettings = {
      idField: 'id',
      textField: 'text',
      allowSearchFilter: true,
      allowRemoteDataSearch: true,
      noDataAvailablePlaceholderText: 'Start typing to simulate a remote query',
      noFilteredDataAvailablePlaceholderText: 'No remote matches found'
    };
    this.remoteCatalog = [{
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
    this.disabledCities = [{
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
    this.disabledSelected = [{
      id: 5,
      text: 'Oslo'
    }];
    this.disabledSettings = {
      idField: 'id',
      textField: 'text',
      disabledField: 'isDisabled',
      allowSearchFilter: true,
      showSelectedItemsAtTop: true
    };
    this.eventLog = ['Demo loaded successfully.'];
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
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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
    styles: ["[_nghost-%COMP%] {\n  color: #17324d;\n  display: block;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top left, rgba(12, 115, 184, 0.14), transparent 32%),\n    radial-gradient(circle at top right, rgba(214, 90, 37, 0.18), transparent 34%),\n    #f5f7fb;\n  margin: 0 auto;\n  max-width: 1320px;\n  min-height: 100vh;\n  overflow-x: clip;\n  padding: 32px 20px 60px;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", serif;\n  letter-spacing: -0.02em;\n}\n\np[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n}\n\n.hero[_ngcontent-%COMP%] {\n  align-items: stretch;\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1.7fr) minmax(300px, 1fr);\n  margin: 0 0 1.5rem;\n}\n\n.hero-main[_ngcontent-%COMP%], \n.hero-setup[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.panels[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(191, 206, 223, 0.8);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(23, 50, 77, 0.12);\n  min-width: 0;\n  padding: 1.4rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #17324d;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n  padding: 0.35rem 0.65rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4vw, 3.4rem);\n  margin: 0 0 0.85rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.6;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n}\n\n.feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #17324d;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n\n.cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  align-items: center;\n  background: linear-gradient(135deg, #c15d3f, #9e4a31);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  justify-content: center;\n  padding: 0.72rem 1.1rem;\n  text-decoration: none;\n}\n\n.btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #17324d;\n}\n\n.hero-setup[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-rows: auto auto auto 1fr;\n}\n\n.hero-setup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: auto minmax(0, 1fr);\n}\n\n.step[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.step-num[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #0c73b8;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.8rem;\n  font-weight: 700;\n  height: 1.9rem;\n  justify-content: center;\n  width: 1.9rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.state[_ngcontent-%COMP%] {\n  background: #13263a;\n  border-radius: 14px;\n  color: #edf4fb;\n  font-size: 0.83rem;\n  line-height: 1.6;\n  margin: 0.55rem 0 0;\n  overflow: auto;\n  overflow-wrap: anywhere;\n  padding: 0.95rem 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  gap: 24px;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  margin: 0;\n}\n\n.panels[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n}\n\n.demo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr;\n}\n\n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  overflow: visible;\n  padding: 1rem;\n}\n\n.demo-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n}\n\n.dropdown-frame[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n  overflow: visible;\n  position: relative;\n  z-index: 2;\n}\n\n.dropdown-frame[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], \n.dropdown-frame[_ngcontent-%COMP%]   ng-multiselect-dropdown[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  position: relative;\n  z-index: 3;\n}\n\n.dropdown-frame[_ngcontent-%COMP%]   ng-multiselect-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  ng-multiselect-dropdown .multiselect-dropdown, \n  ng-multiselect-dropdown .dropdown-btn, \n  ng-multiselect-dropdown .dropdown-list {\n  max-width: 100%;\n  min-width: 0;\n}\n\n  ng-multiselect-dropdown .selected-item-container, \n  ng-multiselect-dropdown .selected-item {\n  min-width: 0;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.9rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  padding: 0.72rem 1rem;\n}\n\nbutton.secondary[_ngcontent-%COMP%] {\n  background: rgba(12, 115, 184, 0.1);\n  color: #0c73b8;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #17324d;\n}\n\nbutton.small[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n}\n\n.state[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n\n.ref-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.api-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9e2ec;\n  padding: 0.7rem 0;\n  text-align: left;\n  vertical-align: top;\n}\n\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: #17324d;\n  white-space: nowrap;\n  width: 1%;\n}\n\n.log-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: calc(100vh - 40px);\n  min-width: 0;\n  overflow: hidden;\n  position: sticky;\n  top: 1rem;\n}\n\n.log-panel-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.log-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0.65rem;\n  overflow-y: auto;\n}\n\n.release-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n\n.log-entry[_ngcontent-%COMP%], \n.release-item[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 14px;\n  color: #17324d;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  padding: 0.75rem 0.85rem;\n  word-break: break-word;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 0;\n}\n\n@media (max-width: 1200px) {\n  .hero[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .layout[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n\n  .log-panel[_ngcontent-%COMP%] {\n    order: 2;\n    max-height: min(360px, 50vh);\n    position: static;\n  }\n}\n\n@media (max-width: 980px) {\n  .ref-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 860px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 20px 14px 42px;\n  }\n\n  .feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .step[_ngcontent-%COMP%] {\n    gap: 0.55rem;\n    grid-template-columns: 1fr;\n  }\n\n  .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    white-space: normal;\n    width: auto;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.1rem, 12vw, 3rem);\n  }\n\n  .cta-row[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 1rem;\n  }\n\n  .hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n   .code[_ngcontent-%COMP%], \n   .state[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 16px 12px 36px;\n  }\n\n  .feature[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%] {\n    padding: 0.9rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdEQUF3RDtFQUN4RCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0U7OztXQUdTO0VBQ1QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztFQUlFLDhDQUE4QztFQUM5Qyx1QkFBdUI7QUFDekI7O0FBRUE7Ozs7OztFQU1FLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWiwwREFBMEQ7RUFDMUQsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7O0VBT0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULDJDQUEyQztFQUMzQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtBQUM1Qjs7QUFFQTs7O0VBR0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBOzs7SUFHRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBOzs7SUFHRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBOzs7O0lBSUUsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBjb2xvcjogIzE3MzI0ZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pciBOZXh0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hlbGwge1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIGxlZnQsIHJnYmEoMTIsIDExNSwgMTg0LCAwLjE0KSwgdHJhbnNwYXJlbnQgMzIlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCByaWdodCwgcmdiYSgyMTQsIDkwLCAzNywgMC4xOCksIHRyYW5zcGFyZW50IDM0JSksXG4gICAgI2Y1ZjdmYjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTMyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogY2xpcDtcbiAgcGFkZGluZzogMzJweCAyMHB4IDYwcHg7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0IHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxucCxcbnRkLFxudGgsXG5idXR0b24sXG5pbnB1dCxcbmxhYmVsIHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuY29kZSxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5oZXJvIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS4yNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS43ZnIpIG1pbm1heCgzMDBweCwgMWZyKTtcbiAgbWFyZ2luOiAwIDAgMS41cmVtO1xufVxuXG4uaGVyby1tYWluLFxuLmhlcm8tc2V0dXAsXG4ucGFuZWwsXG4ucGFuZWxzLFxuLmRlbW8tY2FyZCxcbi5yZWYtY2FyZCxcbi5yZWxlYXNlLWNhcmQge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5oZXJvLWNhcmQsXG4ucGFuZWwsXG4ubG9nLXBhbmVsIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5MSwgMjA2LCAyMjMsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA2MHB4IHJnYmEoMjMsIDUwLCA3NywgMC4xMik7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMS40cmVtO1xufVxuXG4uYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMTczMjRkO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNjVyZW07XG59XG5cbi5oZXJvLW1haW4gaDEge1xuICBmb250LXNpemU6IGNsYW1wKDIuNHJlbSwgNHZ3LCAzLjRyZW0pO1xuICBtYXJnaW46IDAgMCAwLjg1cmVtO1xufVxuXG4uaGVyby1tYWluIHAsXG4ucGFuZWwtaGVhZGVyIHAsXG4ubG9nLXBhbmVsIHAsXG4uZmVhdHVyZSxcbi5mb290ZXIgcCB7XG4gIGNvbG9yOiAjNTk3MDhhO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uZmVhdHVyZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjhyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgbWFyZ2luOiAxLjI1cmVtIDA7XG59XG5cbi5mZWF0dXJlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjUxLCAwLjkyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMC45NXJlbSAxcmVtO1xufVxuXG4uZmVhdHVyZSBzdHJvbmcge1xuICBjb2xvcjogIzE3MzI0ZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLmN0YS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC44cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYnRuIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2MxNWQzZiwgIzllNGEzMSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjcycmVtIDEuMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLnNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzdkNGUyO1xuICBjb2xvcjogIzE3MzI0ZDtcbn1cblxuLmhlcm8tc2V0dXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gMWZyO1xufVxuXG4uaGVyby1zZXR1cCBoMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN0ZXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbm1heCgwLCAxZnIpO1xufVxuXG4uc3RlcCA+IGRpdiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnN0ZXAtbnVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzBjNzNiODtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogMS45cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEuOXJlbTtcbn1cblxuLmhlcm8tc2V0dXAgcHJlLFxuLmNvZGUsXG4uc3RhdGUge1xuICBiYWNrZ3JvdW5kOiAjMTMyNjNhO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBjb2xvcjogI2VkZjRmYjtcbiAgZm9udC1zaXplOiAwLjgzcmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDAuNTVyZW0gMCAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIHBhZGRpbmc6IDAuOTVyZW0gMXJlbTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ubGF5b3V0IHtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDI0cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMjgwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBhbmVscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wYW5lbC1oZWFkZXIgaDIsXG4ubG9nLXBhbmVsIGgyLFxuLnJlbGVhc2UtY2FyZCBoMyB7XG4gIG1hcmdpbjogMCAwIDAuNHJlbTtcbn1cblxuLmRlbW8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5cbi5kZW1vLWNhcmQsXG4ucmVmLWNhcmQsXG4ucmVsZWFzZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5kZW1vLWNhcmQgaDMsXG4ucmVmLWNhcmQgaDQge1xuICBtYXJnaW46IDAgMCAwLjQ1cmVtO1xufVxuXG4uZHJvcGRvd24tZnJhbWUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5kcm9wZG93bi1mcmFtZSBmb3JtLFxuLmRyb3Bkb3duLWZyYW1lIG5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xufVxuXG4uZHJvcGRvd24tZnJhbWUgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIG5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5tdWx0aXNlbGVjdC1kcm9wZG93bixcbjo6bmctZGVlcCBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuLFxuOjpuZy1kZWVwIG5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1saXN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbjo6bmctZGVlcCBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biAuc2VsZWN0ZWQtaXRlbS1jb250YWluZXIsXG46Om5nLWRlZXAgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24gLnNlbGVjdGVkLWl0ZW0ge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjlyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC43MnJlbSAxcmVtO1xufVxuXG5idXR0b24uc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMiwgMTE1LCAxODQsIDAuMSk7XG4gIGNvbG9yOiAjMGM3M2I4O1xufVxuXG5idXR0b24uZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDRlMjtcbiAgY29sb3I6ICMxNzMyNGQ7XG59XG5cbmJ1dHRvbi5zbWFsbCB7XG4gIHBhZGRpbmc6IDAuNDVyZW0gMC44cmVtO1xufVxuXG4uc3RhdGUge1xuICBtYXJnaW4tdG9wOiAwLjg1cmVtO1xufVxuXG4ucmVmLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLmFwaS10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBpLXRhYmxlIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWUyZWM7XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYXBpLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICMxNzMyNGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxJTtcbn1cblxuLmxvZy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMXJlbTtcbn1cblxuLmxvZy1wYW5lbC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjY1cmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmVsZWFzZS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjY1cmVtO1xufVxuXG4ubG9nLWVudHJ5LFxuLnJlbGVhc2UtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDcsIDI1MSwgMC45Mik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGNvbG9yOiAjMTczMjRkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMC43NXJlbSAwLjg1cmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luOiAxLjI1cmVtIDAgMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVybyxcbiAgLmxheW91dCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAubGF5b3V0IHtcbiAgICBnYXA6IDE4cHg7XG4gIH1cblxuICAubG9nLXBhbmVsIHtcbiAgICBvcmRlcjogMjtcbiAgICBtYXgtaGVpZ2h0OiBtaW4oMzYwcHgsIDUwdmgpO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5yZWYtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gIC5zaGVsbCB7XG4gICAgcGFkZGluZzogMjBweCAxNHB4IDQycHg7XG4gIH1cblxuICAuZmVhdHVyZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5zdGVwIHtcbiAgICBnYXA6IDAuNTVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuYXBpLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaGVyby1tYWluIGgxIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDIuMXJlbSwgMTJ2dywgM3JlbSk7XG4gIH1cblxuICAuY3RhLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhlcm8tY2FyZCxcbiAgLnBhbmVsLFxuICAubG9nLXBhbmVsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuaGVyby1zZXR1cCBwcmUsXG4gIC5jb2RlLFxuICAuc3RhdGUge1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNoZWxsIHtcbiAgICBwYWRkaW5nOiAxNnB4IDEycHggMzZweDtcbiAgfVxuXG4gIC5mZWF0dXJlLFxuICAuZGVtby1jYXJkLFxuICAucmVmLWNhcmQsXG4gIC5yZWxlYXNlLWNhcmQge1xuICAgIHBhZGRpbmc6IDAuOXJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stackline/ng-multiselect-dropdown */ 4531);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






class AppModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__.NgMultiSelectDropDownModule.forRoot()]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
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
  badge: 'ANGULAR 20.3 · MULTISELECT',
  angularVersion: '20.3.x',
  packageVersion: '5.0.3',
  packageRange: '^5.0.3',
  docsPath: 'angular-20'
};

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(error => console.error(error));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);