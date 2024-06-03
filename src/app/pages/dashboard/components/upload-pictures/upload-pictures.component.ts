import { Component } from '@angular/core';
import { UploadBoxComponent } from './components/upload-box/upload-box.component';

import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { UploadPicturesLoadingComponent } from './components/upload-pictures-loading/upload-pictures-loading.component';
import { UploadPictureService } from './services/upload-picture.service';
import { UploadPicturePreviewComponent } from './components/upload-picture-preview/upload-picture-preview.component';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { minLengthArray } from '../../../../utils/min-length-formarray';
import { UploadValue } from './models/upload-value';
import { SelectCountryComponent } from '../forms/select-country/select-country.component';

@Component({
  selector: 'app-upload-pictures',
  standalone: true,
  imports: [
    UploadBoxComponent,
    AsyncPipe,
    UploadPicturesLoadingComponent,
    JsonPipe,
    UploadPicturePreviewComponent,
    FormsModule,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    NgClass,
    SelectCountryComponent,
  ],
  providers: [UploadPictureService],
  templateUrl: './upload-pictures.component.html',
})
export class UploadPicturesComponent {
  picturesForm = this.formBuilder.group({
    saveLoading: [false],
    folder: ['', Validators.required],
    pictures: this.formBuilder.array([], minLengthArray(1)),
  });

  saveToAllForm = this.formBuilder.group({
    country: ['Andorra', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private uploadPictureService: UploadPictureService
  ) {}

  async onFilesSelected(files: File[]) {
    files.forEach(async (file, index) => {
      this.addPicture();
      const response = await this.uploadPictureService.upload(file);
      this.updatePicture({ data: response, index });
    });
  }

  async save() {
    this.picturesForm.patchValue({ saveLoading: true });
    await this.uploadPictureService.save(
      this.picturesForm.value.pictures as UploadValue[],
      this.picturesForm.value.folder as string
    );
    this.picturesForm.reset();
    (this.picturesForm.get('pictures') as FormArray).clear();
  }

  addPicture() {
    this.pictures.push(
      this.formBuilder.nonNullable.group({
        filename: ['', Validators.required],
        file: [null, Validators.required],
        loading: [true, []],
        image: ['', []],
        thumbnail: ['', []],
        tags: [[], []],
        private: [false, []],
        isVideo: [false, []],
        country: ['', [Validators.required]],
      })
    );
  }

  updatePicture(params: { index: number; data: any }) {
    this.pictures.at(params.index).patchValue({
      loading: false,
      isVideo: params.data.file.type === 'video/mp4',
      ...params.data,
    });
  }

  get pictures() {
    return this.picturesForm.get('pictures') as FormArray;
  }

  getFormGroup(control: AbstractControl) {
    return control as FormGroup;
  }

  saveToAll() {
    this.pictures.controls.forEach(picture => {
      picture.patchValue({
        country: this.saveToAllForm.value.country,
      });
    });
  }
}
