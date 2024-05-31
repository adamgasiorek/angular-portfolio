import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import {
  ReactiveFormsModule,
} from '@angular/forms';


import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { SelectCountryComponent } from '../../../forms/select-country/select-country.component';
import { SelectTagsComponent } from '../../../forms/select-tags/select-tags.component';

@Component({
  selector: 'app-upload-pictures-loading',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    AsyncPipe,
    MatInput,
    SelectCountryComponent,
    SelectTagsComponent,
    JsonPipe,
  ],
  template: `
    <div class="flex flex-row gap-4">
      <div class="flex h-64 w-64 relative">
        <div class="animate-pulse bg-gray-100 h-full w-full"></div>
      </div>
      <div class="flex flex-col gap-4 h-64 w-64 relative">
        <div class="flex flex-col w-64 relative gap-4">
          <div class="flex flex-col h-12 relative"></div>
          <div class="flex flex-col h-12 relative"></div>
          <div class="flex flex-col h-12 relative"></div>
        </div>
      </div>
    </div>
  `,
})
export class UploadPicturesLoadingComponent {}
