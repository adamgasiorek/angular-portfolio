import { Component } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
  and,
} from '@angular/fire/firestore';
import { debounceTime, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UploadPicturePreviewComponent } from '../upload-pictures/components/upload-picture-preview/upload-picture-preview.component';
import { UploadPicturesLoadingComponent } from '../upload-pictures/components/upload-pictures-loading/upload-pictures-loading.component';
import { EditPicturePreviewComponent } from './components/edit-picture-preview/edit-picture-preview.component';
import { SelectCountryComponent } from '../forms/select-country/select-country.component';
import { SelectTagsComponent } from '../forms/select-tags/select-tags.component';

@Component({
  selector: 'app-edit-pictures',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    UploadPicturePreviewComponent,
    UploadPicturesLoadingComponent,
    EditPicturePreviewComponent,
    SelectCountryComponent,
    SelectTagsComponent,
  ],
  templateUrl: './edit-pictures.component.html',
})
export class EditPicturesComponent {
  pictures: Observable<any[]> | undefined;
  pictureForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: Firestore
  ) {
    this.pictureForm = this.formBuilder.nonNullable.group({
      tags: [[], []],
      country: ['', []],
    });

    this.setFilters(this.pictureForm.value);

    this.pictureForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.setFilters(this.pictureForm.value));
  }

  private setFilters(value: any) {
    this.pictures = collectionData(
      query(
        collection(this.firestore, 'pictures'),
        and(
          value.country
            ? where('country', '==', value.country)
            : where('image', '>', 'h'),
          (value.tags ?? []).length > 0
            ? where(
                'tags',
                'array-contains',
                value.tags.length > 0 ? value.tags[0] : ''
              )
            : where('image', '>', 'h')
        )
      ),
      { idField: 'imageId' }
    );
  }
}
