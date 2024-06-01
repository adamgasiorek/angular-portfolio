import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { countries } from '../../../../../data/countries';

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
    ReactiveFormsModule,
  ],
  templateUrl: './select-country.component.html',
})
export class SelectCountryComponent implements AfterViewInit {
  @Input() parentFormGroup: FormGroup | undefined;

  myControl = new FormControl('');

  filteredOptions: Observable<string[]> | undefined;
  options = countries.map(item => item.name);

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.filteredOptions = this.parentFormGroup!.get(
      'country'
    )!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    this.cdr.detectChanges();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
