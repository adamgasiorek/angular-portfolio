import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectCountryComponent } from '../forms/select-country/select-country.component';
import { SelectTagsComponent } from '../forms/select-tags/select-tags.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { UploadPictureService } from '../upload-pictures/services/upload-picture.service';

@Component({
  selector: 'app-bulk-pictures',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectCountryComponent,
    SelectTagsComponent,
    MatFormField,
    MatInput,
    MatLabel,
  ],
  providers: [UploadPictureService],
  templateUrl: './bulk-pictures.component.html',
})
export class BulkPicturesComponent {
  dupliacteNamesForm = this.formBuilder.group({
    tag: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private uploadPictureService: UploadPictureService
  ) {}

  duplicateName() {
    if (this.dupliacteNamesForm.valid) {
      this.uploadPictureService.removeDuplicatesByTag(
        this.dupliacteNamesForm.value.tag!
      );
    }
  }
}
