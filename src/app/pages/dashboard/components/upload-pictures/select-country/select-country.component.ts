import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {map, Observable, startWith} from "rxjs";
import {countries} from "../../../../../data/countries";

@Component({
  selector: 'app-select-country',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    ReactiveFormsModule
  ],
  templateUrl: './select-country.component.html'
})
export class SelectCountryComponent {
  myControl = new FormControl('');

  filteredOptions: Observable<string[]>;
  options = countries.map(item => item.name);

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
