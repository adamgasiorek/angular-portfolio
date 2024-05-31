import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { SelectCountryComponent } from '../../../forms/select-country/select-country.component';
import { SelectTagsComponent } from '../../../forms/select-tags/select-tags.component';

@Component({
  selector: 'app-upload-picture-preview',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    SelectCountryComponent,
    SelectTagsComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './upload-picture-preview.component.html',
})
export class UploadPicturePreviewComponent {
  @Input() parentFormGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {}
}
