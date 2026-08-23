"use strict";
(self["webpackChunkdocs_angular_19"] = self["webpackChunkdocs_angular_19"] || []).push([["main"],{

/***/ 3073
/*!************************************************************************!*\
  !*** ../../src/ng-multiselect-dropdown/src/click-outside.directive.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickOutsideDirective: () => (/* binding */ ClickOutsideDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ClickOutsideDirective {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(event, targetElement) {
    if (!(targetElement instanceof HTMLElement)) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
  static {
    this.ɵfac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "clickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event, $event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        clickOutside: "clickOutside"
      },
      standalone: false
    });
  }
}

/***/ },

/***/ 3731
/*!*****************************************************************!*\
  !*** ../../src/ng-multiselect-dropdown/src/list-filter.pipe.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListFilterPipe: () => (/* binding */ ListFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
  static {
    this.ɵfac = function ListFilterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ListFilterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "multiSelectFilter",
      type: ListFilterPipe,
      pure: false,
      standalone: false
    });
  }
}

/***/ },

/***/ 932
/*!**********************************************************************!*\
  !*** ../../src/ng-multiselect-dropdown/src/multiselect.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DROPDOWN_CONTROL_VALUE_ACCESSOR: () => (/* binding */ DROPDOWN_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MultiSelectComponent: () => (/* binding */ MultiSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _multiselect_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiselect.model */ 2978);
/* harmony import */ var _list_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-filter.pipe */ 3731);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6684);
/* harmony import */ var _click_outside_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./click-outside.directive */ 3073);








const _c0 = a0 => ({
  "dropdown-multiselect--active": a0
});
function MultiSelectComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._placeholder);
  }
}
function MultiSelectComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16)(1, "span", 17)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_4_listener($event) {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onItemClick($event, item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const k_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", k_r4 > ctx_r0._settings.itemsShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.text, "\u00A0");
  }
}
function MultiSelectComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r0.itemShowRemaining(), "");
  }
}
function MultiSelectComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.toggleSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isAllItemsSelected())("disabled", ctx_r0.disabled || ctx_r0.isLimitSelectionReached());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx_r0.isAllItemsSelected() ? ctx_r0._settings.selectAllText : ctx_r0._settings.unSelectAllText);
  }
}
function MultiSelectComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22)(1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r0.filter.text, $event) || (ctx_r0.filter.text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onFilterTextChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r0.disabled)("placeholder", ctx_r0._settings.searchPlaceholderText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.filter.text);
  }
}
function MultiSelectComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onItemClick($event, item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected(item_r8))("disabled", ctx_r0.disabled || ctx_r0.isLimitSelectionReached() && !ctx_r0.isSelected(item_r8) || item_r8.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", item_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.text);
  }
}
function MultiSelectComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._settings.noFilteredDataAvailablePlaceholderText);
  }
}
function MultiSelectComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._settings.noDataAvailablePlaceholderText);
  }
}
const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MultiSelectComponent),
  multi: true
};
const noop = () => {};
class MultiSelectComponent {
  set placeholder(value) {
    if (value) {
      this._placeholder = value;
    } else {
      this._placeholder = "Select";
    }
  }
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
  onFilterTextChange($event) {
    this.onFilterChange.emit($event);
  }
  constructor(listFilterPipe, cdr) {
    this.listFilterPipe = listFilterPipe;
    this.cdr = cdr;
    this.defaultSettings = {
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
    this._settings = {
      ...this.defaultSettings
    };
    this._data = [];
    this._sourceData = [];
    this.selectedItems = [];
    this.isDropdownOpen = false;
    this._placeholder = "Select";
    this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
    this._sourceDataFields = []; // store source data fields names
    this.filter = new _multiselect_model__WEBPACK_IMPORTED_MODULE_2__.ListItem("");
    this.disabled = false;
    this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onTouchedCallback = noop;
    this.onChangeCallback = noop;
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
            this.selectedItems = [typeof firstItem === "string" || typeof firstItem === "number" ? new _multiselect_model__WEBPACK_IMPORTED_MODULE_2__.ListItem(firstItem) : new _multiselect_model__WEBPACK_IMPORTED_MODULE_2__.ListItem({
              id: firstItem[this._settings.idField],
              text: firstItem[this._settings.textField],
              isDisabled: firstItem[this._settings.disabledField]
            })];
          }
        } catch (e) {
          // console.error(e.body.msg);
        }
      } else {
        const _data = value.map(item => typeof item === "string" || typeof item === "number" ? new _multiselect_model__WEBPACK_IMPORTED_MODULE_2__.ListItem(item) : new _multiselect_model__WEBPACK_IMPORTED_MODULE_2__.ListItem({
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
    this._data = value.map(item => typeof item === "string" || typeof item === "number" ? new _multiselect_model__WEBPACK_IMPORTED_MODULE_2__.ListItem(item) : new _multiselect_model__WEBPACK_IMPORTED_MODULE_2__.ListItem({
      id: item[settings.idField],
      text: item[settings.textField],
      isDisabled: item[settings.disabledField]
    }));
  }
  static {
    this.ɵfac = function MultiSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_list_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.ListFilterPipe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiSelectComponent,
      selectors: [["ng-multiselect-dropdown"]],
      hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() {
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
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])],
      decls: 18,
      vars: 25,
      consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], ["class", "dropdown-placeholder", 4, "ngIf"], ["class", "selected-item-container", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropdown-multiselect__caret-wrapper", 3, "ngClass"], ["class", "dropdown-multiselect__count", 4, "ngIf"], [1, "dropdown-multiselect__caret"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-filtered-data", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "dropdown-placeholder"], [1, "selected-item-container"], [1, "selected-item", 3, "hidden"], [1, "selected-item-remove", 3, "click"], [1, "dropdown-multiselect__count"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "ngModelChange", "readOnly", "placeholder", "ngModel"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "no-filtered-data"], [1, "no-data"]],
      template: function MultiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() {
            return ctx.onTouched();
          })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() {
            return ctx.closeDropdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div")(2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) {
            return ctx.toggleDropdown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2)(4, MultiSelectComponent_span_4_Template, 6, 2, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9)(11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 4, "li", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "multiSelectFilter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "multiSelectFilter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MultiSelectComponent_li_17_Template, 3, 1, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-open", ctx.isDropdownOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.isDropdownOpen));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isDropdownOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 17, ctx._data, ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._data.length != 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 20, ctx._data, ctx.filter).length == 0 && !ctx._settings.allowRemoteDataSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _click_outside_directive__WEBPACK_IMPORTED_MODULE_5__.ClickOutsideDirective, _list_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.ListFilterPipe],
      styles: [".multiselect-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: block;\n  font-size: inherit;\n  font-family: inherit;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid #adadad;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  width: 100%;\n  min-height: 42px;\n  padding: 6px 42px 6px 12px;\n  margin-bottom: 0;\n  font-weight: normal;\n  line-height: 1.52857143;\n  text-align: left;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n  position: relative;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-placeholder[_ngcontent-%COMP%] {\n  color: #666;\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  padding-right: 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 1 auto;\n  max-width: 100%;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  border: 1px solid #337ab7;\n  margin-right: 4px;\n  background: #337ab7;\n  padding: 0px 5px;\n  color: #fff;\n  border-radius: 2px;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  max-width: 100%;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px #959595;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  bottom: 1px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding-right: 4px;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__count[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.85em;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%] {\n  line-height: 16px;\n  display: block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before {\n  position: relative;\n  display: block;\n  color: #999;\n  border-style: solid;\n  border-width: 6px 6px 0 6px;\n  border-color: #999999 transparent;\n  content: \"\";\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%] {\n  transform: rotateZ(180deg);\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background-color: #eceeef;\n}\n\n.dropdown-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 0px 1px 5px #959595;\n}\n.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0px;\n  list-style: none;\n  overflow: auto;\n  margin: 0px;\n}\n.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  cursor: pointer;\n  text-align: left;\n}\n.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding: 10px;\n}\n.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0px;\n  width: 100%;\n  padding: 0px;\n}\n.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]:hover {\n  background-color: #e4e3e3;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus    + div[_ngcontent-%COMP%]:before, \n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover    + div[_ngcontent-%COMP%]:before {\n  border-color: #337ab7;\n  background-color: #f2f2f2;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active    + div[_ngcontent-%COMP%]:before {\n  transition-duration: 0s;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0px;\n  color: #000;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before {\n  box-sizing: content-box;\n  content: \"\";\n  color: #337ab7;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 14px;\n  height: 14px;\n  margin-top: -9px;\n  border: 2px solid #337ab7;\n  text-align: center;\n  transition: all 0.4s ease;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:after {\n  box-sizing: content-box;\n  content: \"\";\n  background-color: #337ab7;\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  transform: scale(0);\n  transform-origin: 50%;\n  transition: transform 200ms ease-out;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + div[_ngcontent-%COMP%]:before {\n  border-color: #cccccc;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus    + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover    + div[_ngcontent-%COMP%]:before {\n  background-color: inherit;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked    + div[_ngcontent-%COMP%]:before {\n  background-color: #cccccc;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:after {\n  background-color: transparent;\n  top: 50%;\n  left: 4px;\n  width: 8px;\n  height: 3px;\n  margin-top: -4px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 0 0 3px 3px;\n  border-image: none;\n  transform: rotate(-45deg) scale(0);\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  transform: rotate(-45deg) scale(1);\n  transition: transform 200ms ease-out;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:before {\n  animation: _ngcontent-%COMP%_borderscale 200ms ease-in;\n  background: #337ab7;\n}\n\n.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg) scale(1);\n}\n\n@keyframes _ngcontent-%COMP%_borderscale {\n  50% {\n    box-shadow: 0 0 0 2px #337ab7;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL3NyYy9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi9zcmMvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ047QUFDSTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDTjtBQUFNO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQTFDSztFQTJDTCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQUVSO0FBRFE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdWO0FBRFE7RUFDRSxxQkFBQTtBQUdWO0FBQ0k7RUFDRSwyQkFBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUNJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBQ047QUFDSTtFQUNFLDBCQUFBO0FBQ047QUFHSTtFQUNFLHlCQTFHcUI7QUF5RzNCOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBSEY7QUFJRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRko7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRko7QUFHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBR0k7RUFDRSxhQUFBO0FBRE47O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQUtBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTs7RUFFRSxxQkFwS1c7RUFxS1gseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQXpMVztFQTBMWCxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBeE1XO0VBeU1YLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBTUUseUJBQUE7QUFQRjs7QUFVQTtFQUdFLHlCQUFBO0FBVEY7O0FBWUE7RUFDRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0FBVEY7O0FBWUE7RUFDRSxvQ0FBQTtFQUNBLG1CQTdQVztBQW9QYjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBWUE7RUFDRTtJQUNFLDZCQUFBO0VBVEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNlLWNvbG9yOiAjMzM3YWI3O1xuJGRpc2FibGUtYmFja2dyb3VuZC1jb2xvcjogI2VjZWVlZjtcbi5tdWx0aXNlbGVjdC1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAuZHJvcGRvd24tYnRuIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZGFkYWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBwYWRkaW5nOiA2cHggNDJweCA2cHggMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTI4NTcxNDM7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmRyb3Bkb3duLXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgLnNlbGVjdGVkLWl0ZW0tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAuc2VsZWN0ZWQtaXRlbXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJhc2UtY29sb3I7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3RlZC1pdGVtOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggIzk1OTU5NTtcbiAgICB9XG4gICAgLmRyb3Bkb3duLW11bHRpc2VsZWN0X19jYXJldC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICB0b3A6IDFweDtcbiAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5kcm9wZG93bi1tdWx0aXNlbGVjdF9fY291bnQge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICB9XG4gICAgLmRyb3Bkb3duLW11bHRpc2VsZWN0X19jYXJldCB7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICB9XG4gICAgLmRyb3Bkb3duLW11bHRpc2VsZWN0X19jYXJldDpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItd2lkdGg6IDZweCA2cHggMCA2cHg7XG4gICAgICBib3JkZXItY29sb3I6ICM5OTk5OTkgdHJhbnNwYXJlbnQ7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cbiAgICAuZHJvcGRvd24tbXVsdGlzZWxlY3QtLWFjdGl2ZSAuZHJvcGRvd24tbXVsdGlzZWxlY3RfX2NhcmV0IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xuICAgIH1cbiAgfVxuICAuZGlzYWJsZWQge1xuICAgICYgPiBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkaXNhYmxlLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbi5kcm9wZG93bi1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDZweCk7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4ICM5NTk1OTU7XG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBsaSB7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmZpbHRlci10ZXh0Ym94IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTNlMztcbn1cbi5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbn1cblxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpmb2N1cyArIGRpdjpiZWZvcmUsXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyICsgZGl2OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogJGJhc2UtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YWN0aXZlICsgZGl2OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xufVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddICsgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddICsgZGl2OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBjb250ZW50OiAnJztcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAkYmFzZS1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddICsgZGl2OmFmdGVyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDtcbn1cblxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpkaXNhYmxlZCArIGRpdjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNjY2NjY2M7XG59XG5cbi5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94XG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J106ZGlzYWJsZWQ6Zm9jdXNcbiAgKyBkaXY6YmVmb3JlXG4gIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94XG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J106ZGlzYWJsZWQ6aG92ZXJcbiAgKyBkaXY6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3hcbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpkaXNhYmxlZDpjaGVja2VkXG4gICsgZGl2OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbi5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10gKyBkaXY6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDRweDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgM3B4IDNweDtcbiAgYm9yZGVyLWltYWdlOiBub25lO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApO1xufVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xufVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBkaXY6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBib3JkZXJzY2FsZSAyMDBtcyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjtcbn1cblxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgZGl2OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbn1cblxuQGtleWZyYW1lcyBib3JkZXJzY2FsZSB7XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRiYXNlLWNvbG9yO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ },

/***/ 2978
/*!******************************************************************!*\
  !*** ../../src/ng-multiselect-dropdown/src/multiselect.model.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem)
/* harmony export */ });
class ListItem {
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

/***/ },

/***/ 6449
/*!*******************************************************************************!*\
  !*** ../../src/ng-multiselect-dropdown/src/ng-multiselect-dropdown.module.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgMultiSelectDropDownModule: () => (/* binding */ NgMultiSelectDropDownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _multiselect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiselect.component */ 932);
/* harmony import */ var _click_outside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./click-outside.directive */ 3073);
/* harmony import */ var _list_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-filter.pipe */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);






class NgMultiSelectDropDownModule {
  static forRoot() {
    return {
      ngModule: NgMultiSelectDropDownModule
    };
  }
  static {
    this.ɵfac = function NgMultiSelectDropDownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgMultiSelectDropDownModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: NgMultiSelectDropDownModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [_list_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.ListFilterPipe],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NgMultiSelectDropDownModule, {
    declarations: [_multiselect_component__WEBPACK_IMPORTED_MODULE_2__.MultiSelectComponent, _click_outside_directive__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideDirective, _list_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.ListFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
    exports: [_multiselect_component__WEBPACK_IMPORTED_MODULE_2__.MultiSelectComponent]
  });
})();

/***/ },

/***/ 2064
/*!***********************************************************!*\
  !*** ../../src/ng-multiselect-dropdown/src/public_api.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSelectComponent: () => (/* reexport safe */ _multiselect_component__WEBPACK_IMPORTED_MODULE_0__.MultiSelectComponent),
/* harmony export */   NgMultiSelectDropDownModule: () => (/* reexport safe */ _ng_multiselect_dropdown_module__WEBPACK_IMPORTED_MODULE_1__.NgMultiSelectDropDownModule)
/* harmony export */ });
/* harmony import */ var _multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiselect.component */ 932);
/* harmony import */ var _ng_multiselect_dropdown_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-multiselect-dropdown.module */ 6449);



/***/ },

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6684);
/* harmony import */ var _src_ng_multiselect_dropdown_src_multiselect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/ng-multiselect-dropdown/src/multiselect.component */ 932);





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
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Package line: ", ctx.docsMeta.packageVersion, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Angular compatibility: ", ctx.docsMeta.angularVersion, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Docs path: /", ctx.docsMeta.docsPath, "/");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _src_ng_multiselect_dropdown_src_multiselect_component__WEBPACK_IMPORTED_MODULE_4__.MultiSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
      styles: ["[_nghost-%COMP%] {\n  color: #17324d;\n  display: block;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top left, rgba(12, 115, 184, 0.14), transparent 32%),\n    radial-gradient(circle at top right, rgba(214, 90, 37, 0.18), transparent 34%),\n    #f5f7fb;\n  margin: 0 auto;\n  max-width: 1320px;\n  min-height: 100vh;\n  overflow-x: clip;\n  padding: 32px 20px 60px;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", serif;\n  letter-spacing: -0.02em;\n}\n\np[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n}\n\n.hero[_ngcontent-%COMP%] {\n  align-items: stretch;\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1.7fr) minmax(300px, 1fr);\n  margin: 0 0 1.5rem;\n}\n\n.hero-main[_ngcontent-%COMP%], \n.hero-setup[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.panels[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%] {\n  backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(191, 206, 223, 0.8);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(23, 50, 77, 0.12);\n  min-width: 0;\n  padding: 1.4rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #17324d;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n  padding: 0.35rem 0.65rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4vw, 3.4rem);\n  margin: 0 0 0.85rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.6;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n}\n\n.feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #17324d;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n\n.cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  align-items: center;\n  background: linear-gradient(135deg, #c15d3f, #9e4a31);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  justify-content: center;\n  padding: 0.72rem 1.1rem;\n  text-decoration: none;\n}\n\n.btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #17324d;\n}\n\n.hero-setup[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-rows: auto auto auto 1fr;\n}\n\n.hero-setup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: auto minmax(0, 1fr);\n}\n\n.step[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.step-num[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #0c73b8;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.8rem;\n  font-weight: 700;\n  height: 1.9rem;\n  justify-content: center;\n  width: 1.9rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.state[_ngcontent-%COMP%] {\n  background: #13263a;\n  border-radius: 14px;\n  color: #edf4fb;\n  font-size: 0.83rem;\n  line-height: 1.6;\n  margin: 0.55rem 0 0;\n  overflow: auto;\n  overflow-wrap: anywhere;\n  padding: 0.95rem 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  gap: 24px;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  margin: 0;\n}\n\n.panels[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n}\n\n.demo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr;\n}\n\n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  overflow: visible;\n  padding: 1rem;\n}\n\n.demo-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n}\n\n.dropdown-frame[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  min-width: 0;\n  overflow: visible;\n  position: relative;\n  z-index: 2;\n}\n\n.dropdown-frame[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], \n.dropdown-frame[_ngcontent-%COMP%]   ng-multiselect-dropdown[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  position: relative;\n  z-index: 3;\n}\n\n.dropdown-frame[_ngcontent-%COMP%]   ng-multiselect-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  ng-multiselect-dropdown .multiselect-dropdown, \n  ng-multiselect-dropdown .dropdown-btn, \n  ng-multiselect-dropdown .dropdown-list {\n  max-width: 100%;\n  min-width: 0;\n}\n\n  ng-multiselect-dropdown .selected-item-container, \n  ng-multiselect-dropdown .selected-item {\n  min-width: 0;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.9rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  padding: 0.72rem 1rem;\n}\n\nbutton.secondary[_ngcontent-%COMP%] {\n  background: rgba(12, 115, 184, 0.1);\n  color: #0c73b8;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #17324d;\n}\n\nbutton.small[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n}\n\n.state[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n\n.ref-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.api-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9e2ec;\n  padding: 0.7rem 0;\n  text-align: left;\n  vertical-align: top;\n}\n\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: #17324d;\n  white-space: nowrap;\n  width: 1%;\n}\n\n.log-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: calc(100vh - 40px);\n  min-width: 0;\n  overflow: hidden;\n  position: sticky;\n  top: 1rem;\n}\n\n.log-panel-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.log-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0.65rem;\n  overflow-y: auto;\n}\n\n.release-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n\n.log-entry[_ngcontent-%COMP%], \n.release-item[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 14px;\n  color: #17324d;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  padding: 0.75rem 0.85rem;\n  word-break: break-word;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 0;\n}\n\n@media (max-width: 1200px) {\n  .hero[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .layout[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n\n  .log-panel[_ngcontent-%COMP%] {\n    order: 2;\n    max-height: min(360px, 50vh);\n    position: static;\n  }\n}\n\n@media (max-width: 980px) {\n  .ref-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 860px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 20px 14px 42px;\n  }\n\n  .feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .step[_ngcontent-%COMP%] {\n    gap: 0.55rem;\n    grid-template-columns: 1fr;\n  }\n\n  .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    white-space: normal;\n    width: auto;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.1rem, 12vw, 3rem);\n  }\n\n  .cta-row[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 1rem;\n  }\n\n  .hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n   .code[_ngcontent-%COMP%], \n   .state[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 16px 12px 36px;\n  }\n\n  .feature[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%] {\n    padding: 0.9rem;\n  }\n}\n\n\n\n\n[_nghost-%COMP%] {\n  --stack-docs-surface: rgba(255, 255, 255, 0.92);\n  --stack-docs-surface-soft: #eef4fb;\n  --stack-docs-border: rgba(63, 81, 181, 0.14);\n  --stack-docs-border-strong: rgba(63, 81, 181, 0.22);\n  --stack-docs-text: #212121;\n  --stack-docs-muted: #616161;\n  --stack-docs-primary: #3f51b5;\n  --stack-docs-primary-soft: #e8eaf6;\n  --stack-docs-shadow: 0 1px 2px rgba(33, 33, 33, 0.12), 0 18px 44px rgba(63, 81, 181, 0.08);\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(63, 81, 181, 0.14), transparent 28%),\n    radial-gradient(circle at left 18%, rgba(23, 50, 77, 0.08), transparent 26%),\n    linear-gradient(180deg, #f8f9fc 0%, #f5f7fb 44%, #eef2f8 100%);\n  color: var(--stack-docs-text);\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.demo-group[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%] {\n  background: var(--stack-docs-surface);\n  border-color: var(--stack-docs-border);\n  box-shadow: var(--stack-docs-shadow);\n}\n\n.badge[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%], \n.stage-pill[_ngcontent-%COMP%], \n.release-link[_ngcontent-%COMP%] {\n  background: var(--stack-docs-primary-soft);\n  color: var(--stack-docs-primary);\n  border: 1px solid var(--stack-docs-border-strong);\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.demo-note[_ngcontent-%COMP%], \n.history-copy[_ngcontent-%COMP%], \n.release-item[_ngcontent-%COMP%], \n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.demo-breadcrumb[_ngcontent-%COMP%], \n.example-stage-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--stack-docs-muted);\n}\n\n.feature[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.demo-group[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%], \n.table-host[_ngcontent-%COMP%], \n.toggle-card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 0%, var(--stack-docs-surface-soft) 100%);\n  border-color: var(--stack-docs-border);\n}\n\n.btn[_ngcontent-%COMP%], \n.release-link.is-current[_ngcontent-%COMP%], \n.demo-link.active[_ngcontent-%COMP%], \n.example-link.active[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%]:not(.secondary):not(.ghost):not(.small), \n.step-num[_ngcontent-%COMP%], \n.step-badge[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%]:not(.light) {\n  background: linear-gradient(135deg, var(--stack-docs-primary), #5c6bc0);\n  color: #ffffff;\n}\n\n.btn.secondary[_ngcontent-%COMP%], \n.demo-link[_ngcontent-%COMP%], \n.example-link[_ngcontent-%COMP%], \nbutton.secondary[_ngcontent-%COMP%], \nbutton.ghost[_ngcontent-%COMP%], \nbutton.small[_ngcontent-%COMP%], \n.clear-btn[_ngcontent-%COMP%], \n.copy-button[_ngcontent-%COMP%], \n.mini-button[_ngcontent-%COMP%], \n.custom-pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.meta-pill.light[_ngcontent-%COMP%] {\n  border-color: var(--stack-docs-border);\n  color: #17324d;\n}\n\npre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.state[_ngcontent-%COMP%], \n.step[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-block[_ngcontent-%COMP%], \n.code-preview[_ngcontent-%COMP%] {\n  background: #1f2438;\n  color: #eef3ff;\n}\n\n@media (max-width: 980px) {\n  .hero[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%], \n   .example-shell[_ngcontent-%COMP%], \n   .example-explorer[_ngcontent-%COMP%], \n   .quickstart-grid[_ngcontent-%COMP%], \n   .docs-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n\n  .demo-nav[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%] {\n    position: static;\n    top: auto;\n    max-height: none;\n  }\n\n  .ref-grid[_ngcontent-%COMP%], \n   .results-grid[_ngcontent-%COMP%], \n   .control-grid[_ngcontent-%COMP%], \n   .api-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%], \n   .demo-grid[_ngcontent-%COMP%], \n   .toggle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 16px 12px 36px !important;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%], \n   .sidebar-card[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%], \n   .demo-stage[_ngcontent-%COMP%], \n   .example-stage[_ngcontent-%COMP%] {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2rem, 13vw, 3rem);\n    line-height: 1.02;\n  }\n\n  .cta-row[_ngcontent-%COMP%], \n   .release-links[_ngcontent-%COMP%], \n   .controls[_ngcontent-%COMP%], \n   .toolbar[_ngcontent-%COMP%], \n   .example-stage-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .btn[_ngcontent-%COMP%], \n   .release-link[_ngcontent-%COMP%], \n   button[_ngcontent-%COMP%], \n   .copy-button[_ngcontent-%COMP%], \n   .clear-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .table-head[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \narticle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  line-height: 1.02;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.preview-frame[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.install-card[_ngcontent-%COMP%], \n.copy-card[_ngcontent-%COMP%], \n.card-shell[_ngcontent-%COMP%], \n.showcase-card[_ngcontent-%COMP%], \n.docs-card[_ngcontent-%COMP%], \n.docs-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.badge[_ngcontent-%COMP%], \n.hero-badge[_ngcontent-%COMP%], \n.version-pill[_ngcontent-%COMP%], \n.release-pill[_ngcontent-%COMP%] {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(2rem, 11vw, 3.15rem);\n  }\n}\n\n\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(1.7rem, 8vw, 2.65rem) !important;\n    line-height: 0.98 !important;\n    letter-spacing: -0.035em !important;\n    word-break: break-all;\n  }\n}\n\n\n\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \narticle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child, \narticle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%], \n.docs-layout[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%], \n.hero-grid[_ngcontent-%COMP%], \n.content-grid[_ngcontent-%COMP%], \n.playground-shell[_ngcontent-%COMP%], \n.playground__grid[_ngcontent-%COMP%], \n.example-shell[_ngcontent-%COMP%], \n.example-explorer[_ngcontent-%COMP%], \n.quickstart-grid[_ngcontent-%COMP%], \n.workbench-grid[_ngcontent-%COMP%], \n.release-links[_ngcontent-%COMP%], \n.cta-row[_ngcontent-%COMP%], \n.controls[_ngcontent-%COMP%], \n.hero-actions[_ngcontent-%COMP%], \n.inline-actions[_ngcontent-%COMP%], \n.playground-actions[_ngcontent-%COMP%], \n.playground-preview-tabs[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%], \n.field.two-up[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.playground-controls[_ngcontent-%COMP%], \n.playground-preview[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.docs-panel[_ngcontent-%COMP%], \n.docs-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.copy-card[_ngcontent-%COMP%], \n.install-card[_ngcontent-%COMP%], \n.card-shell[_ngcontent-%COMP%], \n.hero-copy[_ngcontent-%COMP%], \n.hero-setup[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.badge[_ngcontent-%COMP%], \n.hero-badge[_ngcontent-%COMP%], \n.version-pill[_ngcontent-%COMP%], \n.release-pill[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%], \n.release-link[_ngcontent-%COMP%] {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\npre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.code-block[_ngcontent-%COMP%], \n.code-preview[_ngcontent-%COMP%], \n.snippet[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n@media (max-width: 760px) {\n  .release-links[_ngcontent-%COMP%], \n   .cta-row[_ngcontent-%COMP%], \n   .controls[_ngcontent-%COMP%], \n   .hero-actions[_ngcontent-%COMP%], \n   .inline-actions[_ngcontent-%COMP%], \n   .playground-actions[_ngcontent-%COMP%], \n   .toolbar[_ngcontent-%COMP%], \n   .example-stage-header[_ngcontent-%COMP%], \n   .playground-preview-tabs[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: 1fr !important;\n    align-items: stretch;\n  }\n\n  .release-link[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   .button[_ngcontent-%COMP%], \n   .ghost-button[_ngcontent-%COMP%], \n   button[_ngcontent-%COMP%], \n   .copy-button[_ngcontent-%COMP%], \n   .clear-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .playground-shell[_ngcontent-%COMP%], \n   .playground__grid[_ngcontent-%COMP%], \n   .example-shell[_ngcontent-%COMP%], \n   .example-explorer[_ngcontent-%COMP%], \n   .quickstart-grid[_ngcontent-%COMP%], \n   .workbench-grid[_ngcontent-%COMP%], \n   .demo-grid[_ngcontent-%COMP%], \n   .api-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%], \n   .results-grid[_ngcontent-%COMP%], \n   .control-grid[_ngcontent-%COMP%], \n   .toggle-grid[_ngcontent-%COMP%], \n   .meta-grid[_ngcontent-%COMP%], \n   .page-grid[_ngcontent-%COMP%], \n   .surface-card-grid[_ngcontent-%COMP%], \n   .hero-grid[_ngcontent-%COMP%], \n   .content-grid[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%], \n   .docs-layout[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n\n  .field.two-up[_ngcontent-%COMP%], \n   .playground-table-head[_ngcontent-%COMP%], \n   .playground-table-row[_ngcontent-%COMP%], \n   .table-head[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child, \n   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(1.55rem, 7vw, 2.35rem) !important;\n    line-height: 1.03 !important;\n    letter-spacing: -0.03em !important;\n  }\n\n  .app-shell[_ngcontent-%COMP%], \n   .shell[_ngcontent-%COMP%], \n   .docs-page[_ngcontent-%COMP%], \n   .page-shell[_ngcontent-%COMP%], \n   #app[_ngcontent-%COMP%], \n   .docs-shell[_ngcontent-%COMP%] {\n    padding-left: 14px !important;\n    padding-right: 14px !important;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%], \n   .sidebar-card[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%], \n   .demo-stage[_ngcontent-%COMP%], \n   .example-stage[_ngcontent-%COMP%], \n   .playground-controls[_ngcontent-%COMP%], \n   .playground-preview[_ngcontent-%COMP%], \n   .api-card[_ngcontent-%COMP%], \n   .preview-card[_ngcontent-%COMP%], \n   .surface-card[_ngcontent-%COMP%], \n   .table-shell[_ngcontent-%COMP%], \n   .docs-card[_ngcontent-%COMP%], \n   .docs-panel[_ngcontent-%COMP%] {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .badge[_ngcontent-%COMP%], \n   .hero-badge[_ngcontent-%COMP%], \n   .version-pill[_ngcontent-%COMP%], \n   .release-pill[_ngcontent-%COMP%], \n   .meta-pill[_ngcontent-%COMP%], \n   .release-link[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n\n  pre[_ngcontent-%COMP%], \n   .code[_ngcontent-%COMP%], \n   .code-block[_ngcontent-%COMP%], \n   .code-preview[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdEQUF3RDtFQUN4RCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0U7OztXQUdTO0VBQ1QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztFQUlFLDhDQUE4QztFQUM5Qyx1QkFBdUI7QUFDekI7O0FBRUE7Ozs7OztFQU1FLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWiwwREFBMEQ7RUFDMUQsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7O0VBT0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdEQUFnRDtFQUNoRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkNBQTJDO0VBQzNDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsMEJBQTBCO0FBQzVCOztBQUVBOzs7RUFHRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7O0lBRUUsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7OztJQUdFLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7OztJQUdFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7Ozs7SUFJRSxlQUFlO0VBQ2pCO0FBQ0Y7OztBQUdBLGdDQUFnQztBQUNoQztFQUNFLCtDQUErQztFQUMvQyxrQ0FBa0M7RUFDbEMsNENBQTRDO0VBQzVDLG1EQUFtRDtFQUNuRCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsMEZBQTBGO0FBQzVGOztBQUVBO0VBQ0U7OztrRUFHZ0U7RUFDaEUsNkJBQTZCO0FBQy9COztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkUscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QyxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSwwQ0FBMEM7RUFDMUMsZ0NBQWdDO0VBQ2hDLGlEQUFpRDtBQUNuRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7RUFjRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztFQWVFLG9GQUFvRjtFQUNwRixzQ0FBc0M7QUFDeEM7O0FBRUE7Ozs7Ozs7O0VBUUUsdUVBQXVFO0VBQ3ZFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7Ozs7Ozs7O0VBV0Usc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7Ozs7Ozs7RUFPRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFOzs7Ozs7SUFNRSxxQ0FBcUM7RUFDdkM7O0VBRUE7OztJQUdFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7Ozs7O0lBT0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTs7Ozs7Ozs7O0lBU0Usd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0VBQ25COztFQUVBOzs7OztJQUtFLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0VBRUE7Ozs7O0lBS0UsV0FBVztFQUNiOztFQUVBOztJQUVFLGdEQUFnRDtFQUNsRDtBQUNGOztBQUVBLGlDQUFpQztBQUNqQzs7Ozs7RUFLRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFOzs7OztJQUtFLHFDQUFxQztFQUN2QztBQUNGOztBQUVBLHlDQUF5QztBQUN6QztFQUNFOzs7OztJQUtFLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLHFCQUFxQjtFQUN2QjtBQUNGOzs7QUFHQSwwQ0FBMEM7QUFDMUM7Ozs7Ozs7Ozs7OztFQVlFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMkNFLFlBQVk7QUFDZDs7QUFFQTs7Ozs7O0VBTUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7OztFQU1FLGVBQWU7QUFDakI7O0FBRUE7RUFDRTs7Ozs7Ozs7O0lBU0Usd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyxvQkFBb0I7RUFDdEI7O0VBRUE7Ozs7Ozs7SUFPRSxXQUFXO0VBQ2I7O0VBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JFLHFDQUFxQztFQUN2Qzs7RUFFQTs7Ozs7SUFLRSwyREFBMkQ7RUFDN0Q7QUFDRjs7QUFFQTtFQUNFOzs7Ozs7Ozs7Ozs7SUFZRSxrREFBa0Q7SUFDbEQsNEJBQTRCO0lBQzVCLGtDQUFrQztFQUNwQzs7RUFFQTs7Ozs7O0lBTUUsNkJBQTZCO0lBQzdCLDhCQUE4QjtFQUNoQzs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQkUsd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFFQTs7Ozs7O0lBTUUsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7RUFFQTs7OztJQUlFLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY29sb3I6ICMxNzMyNGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJBdmVuaXIgTmV4dFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoZWxsIHtcbiAgYmFja2dyb3VuZDpcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCBsZWZ0LCByZ2JhKDEyLCAxMTUsIDE4NCwgMC4xNCksIHRyYW5zcGFyZW50IDMyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsIHJnYmEoMjE0LCA5MCwgMzcsIDAuMTgpLCB0cmFuc3BhcmVudCAzNCUpLFxuICAgICNmNWY3ZmI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGNsaXA7XG4gIHBhZGRpbmc6IDMycHggMjBweCA2MHB4O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG59XG5cbnAsXG50ZCxcbnRoLFxuYnV0dG9uLFxuaW5wdXQsXG5sYWJlbCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmNvZGUsXG5wcmUge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuXG4uaGVybyB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEuMjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuN2ZyKSBtaW5tYXgoMzAwcHgsIDFmcik7XG4gIG1hcmdpbjogMCAwIDEuNXJlbTtcbn1cblxuLmhlcm8tbWFpbixcbi5oZXJvLXNldHVwLFxuLnBhbmVsLFxuLnBhbmVscyxcbi5kZW1vLWNhcmQsXG4ucmVmLWNhcmQsXG4ucmVsZWFzZS1jYXJkIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uaGVyby1jYXJkLFxuLnBhbmVsLFxuLmxvZy1wYW5lbCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTEsIDIwNiwgMjIzLCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDI0cHggNjBweCByZ2JhKDIzLCA1MCwgNzcsIDAuMTIpO1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDEuNHJlbTtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzE3MzI0ZDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjY1cmVtO1xufVxuXG4uaGVyby1tYWluIGgxIHtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjRyZW0sIDR2dywgMy40cmVtKTtcbiAgbWFyZ2luOiAwIDAgMC44NXJlbTtcbn1cblxuLmhlcm8tbWFpbiBwLFxuLnBhbmVsLWhlYWRlciBwLFxuLmxvZy1wYW5lbCBwLFxuLmZlYXR1cmUsXG4uZm9vdGVyIHAge1xuICBjb2xvcjogIzU5NzA4YTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmZlYXR1cmUtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC44cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIG1hcmdpbjogMS4yNXJlbSAwO1xufVxuXG4uZmVhdHVyZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDcsIDI1MSwgMC45Mik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDAuOTVyZW0gMXJlbTtcbn1cblxuLmZlYXR1cmUgc3Ryb25nIHtcbiAgY29sb3I6ICMxNzMyNGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59XG5cbi5jdGEtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJ0biB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjMTVkM2YsICM5ZTRhMzEpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43MnJlbSAxLjFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDRlMjtcbiAgY29sb3I6ICMxNzMyNGQ7XG59XG5cbi5oZXJvLXNldHVwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIDFmcjtcbn1cblxuLmhlcm8tc2V0dXAgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5zdGVwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjhyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW5tYXgoMCwgMWZyKTtcbn1cblxuLnN0ZXAgPiBkaXYge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5zdGVwLW51bSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwYzczYjg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDEuOXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjlyZW07XG59XG5cbi5oZXJvLXNldHVwIHByZSxcbi5jb2RlLFxuLnN0YXRlIHtcbiAgYmFja2dyb3VuZDogIzEzMjYzYTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgY29sb3I6ICNlZGY0ZmI7XG4gIGZvbnQtc2l6ZTogMC44M3JlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAwLjU1cmVtIDAgMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICBwYWRkaW5nOiAwLjk1cmVtIDFyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmxheW91dCB7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyNHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDI4MHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5wYW5lbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEuMjVyZW07XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucGFuZWwtaGVhZGVyIGgyLFxuLmxvZy1wYW5lbCBoMixcbi5yZWxlYXNlLWNhcmQgaDMge1xuICBtYXJnaW46IDAgMCAwLjRyZW07XG59XG5cbi5kZW1vLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG4uZGVtby1jYXJkLFxuLnJlZi1jYXJkLFxuLnJlbGVhc2UtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZGVtby1jYXJkIGgzLFxuLnJlZi1jYXJkIGg0IHtcbiAgbWFyZ2luOiAwIDAgMC40NXJlbTtcbn1cblxuLmRyb3Bkb3duLWZyYW1lIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZHJvcGRvd24tZnJhbWUgZm9ybSxcbi5kcm9wZG93bi1mcmFtZSBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cblxuLmRyb3Bkb3duLWZyYW1lIG5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biAubXVsdGlzZWxlY3QtZHJvcGRvd24sXG46Om5nLWRlZXAgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0bixcbjo6bmctZGVlcCBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tbGlzdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG46Om5nLWRlZXAgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24gLnNlbGVjdGVkLWl0ZW0tY29udGFpbmVyLFxuOjpuZy1kZWVwIG5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5zZWxlY3RlZC1pdGVtIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMC45cmVtO1xufVxuXG5idXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNzJyZW0gMXJlbTtcbn1cblxuYnV0dG9uLnNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExNSwgMTg0LCAwLjEpO1xuICBjb2xvcjogIzBjNzNiODtcbn1cblxuYnV0dG9uLmdob3N0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjN2Q0ZTI7XG4gIGNvbG9yOiAjMTczMjRkO1xufVxuXG5idXR0b24uc21hbGwge1xuICBwYWRkaW5nOiAwLjQ1cmVtIDAuOHJlbTtcbn1cblxuLnN0YXRlIHtcbiAgbWFyZ2luLXRvcDogMC44NXJlbTtcbn1cblxuLnJlZi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5hcGktdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwaS10YWJsZSB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDllMmVjO1xuICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFwaS10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMTczMjRkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMSU7XG59XG5cbi5sb2ctcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDFyZW07XG59XG5cbi5sb2ctcGFuZWwtaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sb2ctbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC42NXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnJlbGVhc2UtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC42NXJlbTtcbn1cblxuLmxvZy1lbnRyeSxcbi5yZWxlYXNlLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTEsIDAuOTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBjb2xvcjogIzE3MzI0ZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC44NXJlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbjogMS4yNXJlbSAwIDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlcm8sXG4gIC5sYXlvdXQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmxheW91dCB7XG4gICAgZ2FwOiAxOHB4O1xuICB9XG5cbiAgLmxvZy1wYW5lbCB7XG4gICAgb3JkZXI6IDI7XG4gICAgbWF4LWhlaWdodDogbWluKDM2MHB4LCA1MHZoKTtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xuICAucmVmLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xuICAuc2hlbGwge1xuICAgIHBhZGRpbmc6IDIwcHggMTRweCA0MnB4O1xuICB9XG5cbiAgLmZlYXR1cmUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuc3RlcCB7XG4gICAgZ2FwOiAwLjU1cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmFwaS10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmhlcm8tbWFpbiBoMSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyLjFyZW0sIDEydncsIDNyZW0pO1xuICB9XG5cbiAgLmN0YS1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5oZXJvLWNhcmQsXG4gIC5wYW5lbCxcbiAgLmxvZy1wYW5lbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmhlcm8tc2V0dXAgcHJlLFxuICAuY29kZSxcbiAgLnN0YXRlIHtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zaGVsbCB7XG4gICAgcGFkZGluZzogMTZweCAxMnB4IDM2cHg7XG4gIH1cblxuICAuZmVhdHVyZSxcbiAgLmRlbW8tY2FyZCxcbiAgLnJlZi1jYXJkLFxuICAucmVsZWFzZS1jYXJkIHtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG4gIH1cbn1cblxuXG4vKiBzdGFja2xpbmUtZG9jcy1yZWZyZXNoLTIwMjYgKi9cbjpob3N0IHtcbiAgLS1zdGFjay1kb2NzLXN1cmZhY2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gIC0tc3RhY2stZG9jcy1zdXJmYWNlLXNvZnQ6ICNlZWY0ZmI7XG4gIC0tc3RhY2stZG9jcy1ib3JkZXI6IHJnYmEoNjMsIDgxLCAxODEsIDAuMTQpO1xuICAtLXN0YWNrLWRvY3MtYm9yZGVyLXN0cm9uZzogcmdiYSg2MywgODEsIDE4MSwgMC4yMik7XG4gIC0tc3RhY2stZG9jcy10ZXh0OiAjMjEyMTIxO1xuICAtLXN0YWNrLWRvY3MtbXV0ZWQ6ICM2MTYxNjE7XG4gIC0tc3RhY2stZG9jcy1wcmltYXJ5OiAjM2Y1MWI1O1xuICAtLXN0YWNrLWRvY3MtcHJpbWFyeS1zb2Z0OiAjZThlYWY2O1xuICAtLXN0YWNrLWRvY3Mtc2hhZG93OiAwIDFweCAycHggcmdiYSgzMywgMzMsIDMzLCAwLjEyKSwgMCAxOHB4IDQ0cHggcmdiYSg2MywgODEsIDE4MSwgMC4wOCk7XG59XG5cbi5zaGVsbCB7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsIHJnYmEoNjMsIDgxLCAxODEsIDAuMTQpLCB0cmFuc3BhcmVudCAyOCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgbGVmdCAxOCUsIHJnYmEoMjMsIDUwLCA3NywgMC4wOCksIHRyYW5zcGFyZW50IDI2JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y4ZjlmYyAwJSwgI2Y1ZjdmYiA0NCUsICNlZWYyZjggMTAwJSk7XG4gIGNvbG9yOiB2YXIoLS1zdGFjay1kb2NzLXRleHQpO1xufVxuXG4uaGVyby1jYXJkLFxuLnBhbmVsLFxuLmxvZy1wYW5lbCxcbi5zaWRlYmFyLFxuLnNpZGViYXItY2FyZCxcbi5kZW1vLWNhcmQsXG4ucmVmLWNhcmQsXG4ucmVsZWFzZS1jYXJkLFxuLmRlbW8tZ3JvdXAsXG4uZGVtby1zdGFnZSxcbi5jb250cm9scy1jYXJkLFxuLnBsYXlncm91bmQtY2FyZCxcbi5yZXN1bHQtY2FyZCxcbi5hcGktY2FyZCxcbi5wcmV2aWV3LWNhcmQsXG4uc3VyZmFjZS1jYXJkLFxuLnRhYmxlLXNoZWxsLFxuLmV4YW1wbGUtc3RhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdGFjay1kb2NzLXN1cmZhY2UpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXN0YWNrLWRvY3MtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc3RhY2stZG9jcy1zaGFkb3cpO1xufVxuXG4uYmFkZ2UsXG4ubWV0YS1waWxsLFxuLnN0YWdlLXBpbGwsXG4ucmVsZWFzZS1saW5rIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3RhY2stZG9jcy1wcmltYXJ5LXNvZnQpO1xuICBjb2xvcjogdmFyKC0tc3RhY2stZG9jcy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3RhY2stZG9jcy1ib3JkZXItc3Ryb25nKTtcbn1cblxuLmhlcm8tbWFpbiBwLFxuLnBhbmVsLWhlYWRlciBwLFxuLmxvZy1wYW5lbCBwLFxuLmZlYXR1cmUsXG4uZGVtby1ub3RlLFxuLmhpc3RvcnktY29weSxcbi5yZWxlYXNlLWl0ZW0sXG4uZm9vdGVyIHAsXG4uZmllbGQgbGFiZWwsXG4ucmVzdWx0LWNhcmQgc3Ryb25nLFxuLmFwaS10YWJsZSB0aCxcbi5hcGktcm93IHN0cm9uZyxcbi5kZW1vLWJyZWFkY3J1bWIsXG4uZXhhbXBsZS1zdGFnZS1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS1zdGFjay1kb2NzLW11dGVkKTtcbn1cblxuLmZlYXR1cmUsXG4uZGVtby1jYXJkLFxuLnJlZi1jYXJkLFxuLnJlbGVhc2UtY2FyZCxcbi5kZW1vLWdyb3VwLFxuLmRlbW8tc3RhZ2UsXG4uY29udHJvbHMtY2FyZCxcbi5wbGF5Z3JvdW5kLWNhcmQsXG4ucmVzdWx0LWNhcmQsXG4uYXBpLWNhcmQsXG4ucHJldmlldy1jYXJkLFxuLnN1cmZhY2UtY2FyZCxcbi5leGFtcGxlLXN0YWdlLFxuLnRhYmxlLWhvc3QsXG4udG9nZ2xlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCB2YXIoLS1zdGFjay1kb2NzLXN1cmZhY2Utc29mdCkgMTAwJSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3RhY2stZG9jcy1ib3JkZXIpO1xufVxuXG4uYnRuLFxuLnJlbGVhc2UtbGluay5pcy1jdXJyZW50LFxuLmRlbW8tbGluay5hY3RpdmUsXG4uZXhhbXBsZS1saW5rLmFjdGl2ZSxcbmJ1dHRvbjpub3QoLnNlY29uZGFyeSk6bm90KC5naG9zdCk6bm90KC5zbWFsbCksXG4uc3RlcC1udW0sXG4uc3RlcC1iYWRnZSxcbi5tZXRhLXBpbGw6bm90KC5saWdodCkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zdGFjay1kb2NzLXByaW1hcnkpLCAjNWM2YmMwKTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4uc2Vjb25kYXJ5LFxuLmRlbW8tbGluayxcbi5leGFtcGxlLWxpbmssXG5idXR0b24uc2Vjb25kYXJ5LFxuYnV0dG9uLmdob3N0LFxuYnV0dG9uLnNtYWxsLFxuLmNsZWFyLWJ0bixcbi5jb3B5LWJ1dHRvbixcbi5taW5pLWJ1dHRvbixcbi5jdXN0b20tcGFnZXIgYnV0dG9uLFxuLm1ldGEtcGlsbC5saWdodCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3RhY2stZG9jcy1ib3JkZXIpO1xuICBjb2xvcjogIzE3MzI0ZDtcbn1cblxucHJlLFxuLmNvZGUsXG4uc3RhdGUsXG4uc3RlcCBwcmUsXG4uY29kZS1jYXJkIHByZSxcbi5jb2RlLWJsb2NrLFxuLmNvZGUtcHJldmlldyB7XG4gIGJhY2tncm91bmQ6ICMxZjI0Mzg7XG4gIGNvbG9yOiAjZWVmM2ZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLmhlcm8sXG4gIC5sYXlvdXQsXG4gIC5leGFtcGxlLXNoZWxsLFxuICAuZXhhbXBsZS1leHBsb3JlcixcbiAgLnF1aWNrc3RhcnQtZ3JpZCxcbiAgLmRvY3MtbGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRlbW8tbmF2LFxuICAuc2lkZWJhcixcbiAgLmxvZy1wYW5lbCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB0b3A6IGF1dG87XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbiAgfVxuXG4gIC5yZWYtZ3JpZCxcbiAgLnJlc3VsdHMtZ3JpZCxcbiAgLmNvbnRyb2wtZ3JpZCxcbiAgLmFwaS1ncmlkLFxuICAuZmVhdHVyZS1ncmlkLFxuICAuZGVtby1ncmlkLFxuICAudG9nZ2xlLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5zaGVsbCB7XG4gICAgcGFkZGluZzogMTZweCAxMnB4IDM2cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oZXJvLWNhcmQsXG4gIC5wYW5lbCxcbiAgLmxvZy1wYW5lbCxcbiAgLnNpZGViYXItY2FyZCxcbiAgLmRlbW8tY2FyZCxcbiAgLnJlZi1jYXJkLFxuICAucmVsZWFzZS1jYXJkLFxuICAuZGVtby1zdGFnZSxcbiAgLmV4YW1wbGUtc3RhZ2Uge1xuICAgIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICB9XG5cbiAgLmhlcm8tbWFpbiBoMSxcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMTN2dywgM3JlbSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDI7XG4gIH1cblxuICAuY3RhLXJvdyxcbiAgLnJlbGVhc2UtbGlua3MsXG4gIC5jb250cm9scyxcbiAgLnRvb2xiYXIsXG4gIC5leGFtcGxlLXN0YWdlLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5idG4sXG4gIC5yZWxlYXNlLWxpbmssXG4gIGJ1dHRvbixcbiAgLmNvcHktYnV0dG9uLFxuICAuY2xlYXItYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50YWJsZS1oZWFkLFxuICAudGFibGUtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuLyogc3RhY2tsaW5lLWRvY3Mtd3JhcC1maXgtMjAyNiAqL1xuLmhlcm8tbWFpbiBoMSxcbi5oZXJvIGgxLFxuLnBhZ2UtaGVhZGVyIGgxLFxuLmRvY3MtaGVybyBoMSxcbmFydGljbGUgaDE6Zmlyc3QtY2hpbGQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBsaW5lLWhlaWdodDogMS4wMjtcbn1cblxuLmhlcm8tY2FyZCxcbi5wYW5lbCxcbi5zaWRlYmFyLWNhcmQsXG4uZGVtby1jYXJkLFxuLnByZXZpZXctZnJhbWUsXG4uc3VyZmFjZS1jYXJkLFxuLnRhYmxlLXNoZWxsLFxuLmluc3RhbGwtY2FyZCxcbi5jb3B5LWNhcmQsXG4uY2FyZC1zaGVsbCxcbi5zaG93Y2FzZS1jYXJkLFxuLmRvY3MtY2FyZCxcbi5kb2NzLXBhbmVsIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYmFkZ2UsXG4uaGVyby1iYWRnZSxcbi52ZXJzaW9uLXBpbGwsXG4ucmVsZWFzZS1waWxsIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5oZXJvLW1haW4gaDEsXG4gIC5oZXJvIGgxLFxuICAucGFnZS1oZWFkZXIgaDEsXG4gIC5kb2NzLWhlcm8gaDEsXG4gIGFydGljbGUgaDE6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMTF2dywgMy4xNXJlbSk7XG4gIH1cbn1cblxuLyogc3RhY2tsaW5lLWRvY3MtbW9iaWxlLXRpdGxlLWZpeC0yMDI2ICovXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmhlcm8tbWFpbiBoMSxcbiAgLmhlcm8gaDEsXG4gIC5wYWdlLWhlYWRlciBoMSxcbiAgLmRvY3MtaGVybyBoMSxcbiAgYXJ0aWNsZSBoMTpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjdyZW0sIDh2dywgMi42NXJlbSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMC45OCAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMzVlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxufVxuXG5cbi8qIHN0YWNrbGluZS1kb2NzLW1vYmlsZS1sYXlvdXQtZml4LTIwMjYgKi9cbi5oZXJvLW1haW4gaDEsXG4uaGVyby1tYWluIGgyLFxuLmhlcm8tY2FyZCBoMSxcbi5oZXJvLWNhcmQgaDIsXG4uaGVybyBoMSxcbi5oZXJvIGgyLFxuLnBhZ2UtaGVhZGVyIGgxLFxuLnBhZ2UtaGVhZGVyIGgyLFxuLmRvY3MtaGVybyBoMSxcbi5kb2NzLWhlcm8gaDIsXG5hcnRpY2xlIGgxOmZpcnN0LWNoaWxkLFxuYXJ0aWNsZSBoMjpmaXJzdC1jaGlsZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5sYXlvdXQsXG4uZG9jcy1sYXlvdXQsXG4uaGVybyxcbi5oZXJvLWdyaWQsXG4uY29udGVudC1ncmlkLFxuLnBsYXlncm91bmQtc2hlbGwsXG4ucGxheWdyb3VuZF9fZ3JpZCxcbi5leGFtcGxlLXNoZWxsLFxuLmV4YW1wbGUtZXhwbG9yZXIsXG4ucXVpY2tzdGFydC1ncmlkLFxuLndvcmtiZW5jaC1ncmlkLFxuLnJlbGVhc2UtbGlua3MsXG4uY3RhLXJvdyxcbi5jb250cm9scyxcbi5oZXJvLWFjdGlvbnMsXG4uaW5saW5lLWFjdGlvbnMsXG4ucGxheWdyb3VuZC1hY3Rpb25zLFxuLnBsYXlncm91bmQtcHJldmlldy10YWJzLFxuLmZpZWxkLFxuLmZpZWxkLnR3by11cCxcbi5zaWRlYmFyLFxuLnNpZGViYXItY2FyZCxcbi5wYW5lbCxcbi5kZW1vLWNhcmQsXG4ucGxheWdyb3VuZC1jYXJkLFxuLnBsYXlncm91bmQtY29udHJvbHMsXG4ucGxheWdyb3VuZC1wcmV2aWV3LFxuLnJlc3VsdC1jYXJkLFxuLmNvbnRyb2xzLWNhcmQsXG4ucmVsZWFzZS1jYXJkLFxuLmFwaS1jYXJkLFxuLnByZXZpZXctY2FyZCxcbi5leGFtcGxlLXN0YWdlLFxuLmRlbW8tc3RhZ2UsXG4uZG9jcy1wYW5lbCxcbi5kb2NzLWNhcmQsXG4udGFibGUtc2hlbGwsXG4uc3VyZmFjZS1jYXJkLFxuLmNvcHktY2FyZCxcbi5pbnN0YWxsLWNhcmQsXG4uY2FyZC1zaGVsbCxcbi5oZXJvLWNvcHksXG4uaGVyby1zZXR1cCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmJhZGdlLFxuLmhlcm8tYmFkZ2UsXG4udmVyc2lvbi1waWxsLFxuLnJlbGVhc2UtcGlsbCxcbi5tZXRhLXBpbGwsXG4ucmVsZWFzZS1saW5rIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxucHJlLFxuLmNvZGUsXG4uY29kZS1ibG9jayxcbi5jb2RlLXByZXZpZXcsXG4uc25pcHBldCBwcmUsXG4uY29kZS1jYXJkIHByZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5yZWxlYXNlLWxpbmtzLFxuICAuY3RhLXJvdyxcbiAgLmNvbnRyb2xzLFxuICAuaGVyby1hY3Rpb25zLFxuICAuaW5saW5lLWFjdGlvbnMsXG4gIC5wbGF5Z3JvdW5kLWFjdGlvbnMsXG4gIC50b29sYmFyLFxuICAuZXhhbXBsZS1zdGFnZS1oZWFkZXIsXG4gIC5wbGF5Z3JvdW5kLXByZXZpZXctdGFicyB7XG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAucmVsZWFzZS1saW5rLFxuICAuYnRuLFxuICAuYnV0dG9uLFxuICAuZ2hvc3QtYnV0dG9uLFxuICBidXR0b24sXG4gIC5jb3B5LWJ1dHRvbixcbiAgLmNsZWFyLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGxheWdyb3VuZC1zaGVsbCxcbiAgLnBsYXlncm91bmRfX2dyaWQsXG4gIC5leGFtcGxlLXNoZWxsLFxuICAuZXhhbXBsZS1leHBsb3JlcixcbiAgLnF1aWNrc3RhcnQtZ3JpZCxcbiAgLndvcmtiZW5jaC1ncmlkLFxuICAuZGVtby1ncmlkLFxuICAuYXBpLWdyaWQsXG4gIC5mZWF0dXJlLWdyaWQsXG4gIC5yZXN1bHRzLWdyaWQsXG4gIC5jb250cm9sLWdyaWQsXG4gIC50b2dnbGUtZ3JpZCxcbiAgLm1ldGEtZ3JpZCxcbiAgLnBhZ2UtZ3JpZCxcbiAgLnN1cmZhY2UtY2FyZC1ncmlkLFxuICAuaGVyby1ncmlkLFxuICAuY29udGVudC1ncmlkLFxuICAubGF5b3V0LFxuICAuZG9jcy1sYXlvdXQsXG4gIC5oZXJvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZpZWxkLnR3by11cCxcbiAgLnBsYXlncm91bmQtdGFibGUtaGVhZCxcbiAgLnBsYXlncm91bmQtdGFibGUtcm93LFxuICAudGFibGUtaGVhZCxcbiAgLnRhYmxlLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5oZXJvLW1haW4gaDEsXG4gIC5oZXJvLW1haW4gaDIsXG4gIC5oZXJvLWNhcmQgaDEsXG4gIC5oZXJvLWNhcmQgaDIsXG4gIC5oZXJvIGgxLFxuICAuaGVybyBoMixcbiAgLnBhZ2UtaGVhZGVyIGgxLFxuICAucGFnZS1oZWFkZXIgaDIsXG4gIC5kb2NzLWhlcm8gaDEsXG4gIC5kb2NzLWhlcm8gaDIsXG4gIGFydGljbGUgaDE6Zmlyc3QtY2hpbGQsXG4gIGFydGljbGUgaDI6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41NXJlbSwgN3Z3LCAyLjM1cmVtKSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjAzICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtc2hlbGwsXG4gIC5zaGVsbCxcbiAgLmRvY3MtcGFnZSxcbiAgLnBhZ2Utc2hlbGwsXG4gICNhcHAsXG4gIC5kb2NzLXNoZWxsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaGVyby1jYXJkLFxuICAucGFuZWwsXG4gIC5sb2ctcGFuZWwsXG4gIC5zaWRlYmFyLWNhcmQsXG4gIC5kZW1vLWNhcmQsXG4gIC5yZWYtY2FyZCxcbiAgLnJlbGVhc2UtY2FyZCxcbiAgLmRlbW8tc3RhZ2UsXG4gIC5leGFtcGxlLXN0YWdlLFxuICAucGxheWdyb3VuZC1jb250cm9scyxcbiAgLnBsYXlncm91bmQtcHJldmlldyxcbiAgLmFwaS1jYXJkLFxuICAucHJldmlldy1jYXJkLFxuICAuc3VyZmFjZS1jYXJkLFxuICAudGFibGUtc2hlbGwsXG4gIC5kb2NzLWNhcmQsXG4gIC5kb2NzLXBhbmVsIHtcbiAgICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgfVxuXG4gIC5iYWRnZSxcbiAgLmhlcm8tYmFkZ2UsXG4gIC52ZXJzaW9uLXBpbGwsXG4gIC5yZWxlYXNlLXBpbGwsXG4gIC5tZXRhLXBpbGwsXG4gIC5yZWxlYXNlLWxpbmsge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgcHJlLFxuICAuY29kZSxcbiAgLmNvZGUtYmxvY2ssXG4gIC5jb2RlLXByZXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
/* harmony import */ var _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stackline/ng-multiselect-dropdown */ 2064);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _src_ng_multiselect_dropdown_src_ng_multiselect_dropdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/ng-multiselect-dropdown/src/ng-multiselect-dropdown.module */ 6449);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _stackline_ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__.NgMultiSelectDropDownModule.forRoot()]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _src_ng_multiselect_dropdown_src_ng_multiselect_dropdown_module__WEBPACK_IMPORTED_MODULE_5__.NgMultiSelectDropDownModule]
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
  badge: 'ANGULAR 19 FAMILY',
  angularVersion: '19.0.0 -> 19.2.25',
  packageVersion: '4.0.3',
  packageRange: '4',
  docsPath: 'angular-19'
};

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
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
//# sourceMappingURL=main.js.map