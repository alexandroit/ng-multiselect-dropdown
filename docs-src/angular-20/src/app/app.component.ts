import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from '@revivejs/ng-multiselect-dropdown';
import { DOCS_META } from './docs-meta';

@Component({
  selector: 'docs-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly docsMeta = DOCS_META;

  readonly installCode =
    `npm install @revivejs/ng-multiselect-dropdown@${this.docsMeta.packageRange}`;

  readonly setupCode = [
    `import { FormsModule, ReactiveFormsModule } from '@angular/forms';`,
    `import { NgMultiSelectDropDownModule } from '@revivejs/ng-multiselect-dropdown';`,
    ``,
    `@NgModule({`,
    `  imports: [`,
    `    BrowserModule,`,
    `    FormsModule,`,
    `    ReactiveFormsModule,`,
    `    NgMultiSelectDropDownModule.forRoot()`,
    `  ]`,
    `})`,
    `export class AppModule {}`
  ].join('\n');

  readonly templateCode = [
    `<ng-multiselect-dropdown`,
    `  [data]="basicCities"`,
    `  [settings]="basicSettings"`,
    `  [(ngModel)]="basicSelected"`,
    `  (onSelect)="onEvent('Basic example', 'select', $event)">`,
    `</ng-multiselect-dropdown>`
  ].join('\n');

  readonly basicTsCode = [
    `basicCities = [`,
    `  { id: 1, text: 'Toronto' },`,
    `  { id: 2, text: 'Lisbon' },`,
    `  { id: 3, text: 'Singapore' }`,
    `];`,
    ``,
    `basicSettings = {`,
    `  idField: 'id',`,
    `  textField: 'text',`,
    `  allowSearchFilter: true,`,
    `  itemsShowLimit: 3`,
    `};`
  ].join('\n');

  readonly singleTsCode = [
    `singleCities = ['Toronto', 'Lisbon', 'Singapore', 'Auckland'];`,
    ``,
    `singleSettings = {`,
    `  singleSelection: true,`,
    `  allowSearchFilter: true,`,
    `  closeDropDownOnSelection: true`,
    `};`
  ].join('\n');

  readonly reactiveTsCode = [
    `reactiveForm = this.fb.group({`,
    `  cities: [[{ id: 2, text: 'Template parity' }]]`,
    `});`,
    ``,
    `reactiveSettings = {`,
    `  idField: 'id',`,
    `  textField: 'text',`,
    `  enableCheckAll: false,`,
    `  allowSearchFilter: true`,
    `};`
  ].join('\n');

  readonly limitTsCode = [
    `limitSettings = {`,
    `  idField: 'id',`,
    `  textField: 'text',`,
    `  allowSearchFilter: true,`,
    `  limitSelection: 2,`,
    `  itemsShowLimit: 2`,
    `};`
  ].join('\n');

  readonly remoteTsCode = [
    `remoteSettings = {`,
    `  idField: 'id',`,
    `  textField: 'text',`,
    `  allowSearchFilter: true,`,
    `  allowRemoteDataSearch: true,`,
    `  noDataAvailablePlaceholderText: 'Start typing to simulate a remote query'`,
    `};`,
    ``,
    `onRemoteFilter(term: string) {`,
    `  this.remoteData = this.remoteCatalog`,
    `    .filter((item) => item.text.toLowerCase().includes(term.toLowerCase()));`,
    `}`
  ].join('\n');

  readonly disabledTsCode = [
    `disabledCities = [`,
    `  { id: 1, text: 'Toronto' },`,
    `  { id: 2, text: 'Lisbon', isDisabled: true },`,
    `  { id: 3, text: 'Singapore' }`,
    `];`,
    ``,
    `disabledSettings = {`,
    `  idField: 'id',`,
    `  textField: 'text',`,
    `  disabledField: 'isDisabled',`,
    `  allowSearchFilter: true,`,
    `  showSelectedItemsAtTop: true`,
    `};`
  ].join('\n');

  readonly basicCities = [
    { id: 1, text: 'Toronto' },
    { id: 2, text: 'Lisbon' },
    { id: 3, text: 'Singapore' },
    { id: 4, text: 'Auckland' },
    { id: 5, text: 'Oslo' }
  ];

  basicSelected = [
    { id: 2, text: 'Lisbon' },
    { id: 4, text: 'Auckland' }
  ];

  readonly basicSettings: IDropdownSettings = {
    idField: 'id',
    textField: 'text',
    allowSearchFilter: true,
    enableCheckAll: true,
    selectAllText: 'Select all',
    unSelectAllText: 'Clear all',
    itemsShowLimit: 3
  };

  readonly singleCities = ['Toronto', 'Lisbon', 'Singapore', 'Auckland', 'Oslo'];
  singleSelected = ['Toronto'];

  readonly singleSettings: IDropdownSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };

  readonly reactiveCities = [
    { id: 1, text: 'Angular forms' },
    { id: 2, text: 'Template parity' },
    { id: 3, text: 'Search filter' },
    { id: 4, text: 'Select all' }
  ];

  readonly reactiveSettings: IDropdownSettings = {
    idField: 'id',
    textField: 'text',
    enableCheckAll: false,
    allowSearchFilter: true
  };

  readonly limitCities = [
    { id: 1, text: 'Toronto' },
    { id: 2, text: 'Lisbon' },
    { id: 3, text: 'Singapore' },
    { id: 4, text: 'Auckland' },
    { id: 5, text: 'Oslo' }
  ];

  limitSelected = [{ id: 1, text: 'Toronto' }];

  readonly limitSettings: IDropdownSettings = {
    idField: 'id',
    textField: 'text',
    allowSearchFilter: true,
    limitSelection: 2,
    itemsShowLimit: 2
  };

  remoteData: Array<{ id: number; text: string }> = [];
  remoteSelected: Array<{ id: number; text: string }> = [];

  readonly remoteSettings: IDropdownSettings = {
    idField: 'id',
    textField: 'text',
    allowSearchFilter: true,
    allowRemoteDataSearch: true,
    noDataAvailablePlaceholderText: 'Start typing to simulate a remote query',
    noFilteredDataAvailablePlaceholderText: 'No remote matches found'
  };

  readonly remoteCatalog = [
    { id: 1, text: 'Toronto' },
    { id: 2, text: 'Tokyo' },
    { id: 3, text: 'Tallinn' },
    { id: 4, text: 'Lisbon' },
    { id: 5, text: 'Lima' },
    { id: 6, text: 'Lahore' },
    { id: 7, text: 'Singapore' },
    { id: 8, text: 'Seoul' },
    { id: 9, text: 'Stockholm' }
  ];

  readonly disabledCities = [
    { id: 1, text: 'Toronto' },
    { id: 2, text: 'Lisbon', isDisabled: true },
    { id: 3, text: 'Singapore' },
    { id: 4, text: 'Auckland', isDisabled: true },
    { id: 5, text: 'Oslo' }
  ];

  disabledSelected = [{ id: 5, text: 'Oslo' }];

  readonly disabledSettings: IDropdownSettings = {
    idField: 'id',
    textField: 'text',
    disabledField: 'isDisabled',
    allowSearchFilter: true,
    showSelectedItemsAtTop: true
  };

  reactiveForm: FormGroup;
  eventLog = ['Demo loaded successfully.'];

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      cities: [[{ id: 2, text: 'Template parity' }]]
    });
  }

  onEvent(demo: string, type: string, payload: unknown) {
    const message = `${demo} ${type}: ${this.formatPayload(payload)}`;
    this.eventLog = [`${this.timeLabel()} ${message}`, ...this.eventLog].slice(0, 14);
  }

  onReactiveChange() {
    this.onEvent('Reactive form', 'value', this.reactiveForm.value.cities || []);
  }

  resetReactive() {
    this.reactiveForm.get('cities')?.setValue([{ id: 1, text: 'Angular forms' }]);
    this.onReactiveChange();
  }

  onRemoteFilter(term: string) {
    const normalized = (term || '').toLowerCase().trim();
    this.remoteData = normalized
      ? this.remoteCatalog.filter((item) => item.text.toLowerCase().includes(normalized))
      : [];

    this.onEvent('Remote search', 'filter', term || '(empty)');
  }

  clearLog() {
    this.eventLog = ['Event log cleared.'];
  }

  private timeLabel() {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  private formatPayload(payload: unknown) {
    if (typeof payload === 'string') {
      return payload;
    }

    const text = JSON.stringify(payload);
    return text.length > 110 ? `${text.slice(0, 107)}...` : text;
  }
}
