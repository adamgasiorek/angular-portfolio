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
import { SelectCountryComponent } from '../forms/select-country/select-country.component';
import { getAspectRatio } from '../../../../utils/get-aspect-ratio';
import { SelectTagsComponent } from '../forms/select-tags/select-tags.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { UploadValue } from './models/upload-value';

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
    SelectTagsComponent,
    MatCheckbox,
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

  pageForm = this.formBuilder.group({
    isUpdating: [false, []],
    tag: ['', []],
    url: ['', []],
  });

  albumForm = this.formBuilder.group({
    isAddingToAlbum: [false, []],
    id: ['', []],
    name: ['', []],
  });

  saveToAllForm = this.formBuilder.group({
    tags: [[], []],
    country: ['', []],
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
    if (this.albumForm.get('isAddingToAlbum')?.value) {
      await this.uploadPictureService.addToAlbum(
        this.albumForm.get('id')?.value ?? '',
        {
          name: this.albumForm.get('name')?.value,
          url: this.pageForm.get('url')?.value,
          thumbnail: (this.picturesForm.get('pictures')?.value as any)[0][
            'thumbnail'
          ],
        }
      );
      this.albumForm.reset();
    }

    if (this.pageForm.get('isUpdating')?.value) {
      await this.uploadPictureService.addPage({
        url: this.pageForm.get('url')?.value,
        filterTags: [this.pageForm.get('tag')?.value],
      });
      this.pageForm.reset();
    }

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
        isTall: [false, []],
        country: ['', [Validators.required]],
      })
    );
  }

  async updatePicture(params: { index: number; data: any }) {
    const aspectRatio = await getAspectRatio(params.data.file);
    this.pictures.at(params.index).patchValue({
      loading: false,
      isVideo:
        params.data.file.type === 'video/mp4' ||
        params.data.file.type === 'video/quicktime',
      isTall: aspectRatio < 0.8,
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
        tags: this.saveToAllForm.value.tags,
        country: this.saveToAllForm.value.country,
      });
    });
  }
}
