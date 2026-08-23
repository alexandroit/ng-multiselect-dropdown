// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare const __karma__: any;
declare const require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Explicit imports keep the suite deterministic with modern Angular builders.
require('./ng-multiselect-dropdown/test/list-filter.pipe.spec');
require('./ng-multiselect-dropdown/test/multi-select-disabled-item.component.spec');
require('./ng-multiselect-dropdown/test/multi-select.component.spec');
require('./ng-multiselect-dropdown/test/multi-select.component1.spec');
require('./ng-multiselect-dropdown/test/multi-select.component2.spec');
require('./ng-multiselect-dropdown/test/various-input-data.spec');
// Finally, start Karma to run the tests.
__karma__.start();
