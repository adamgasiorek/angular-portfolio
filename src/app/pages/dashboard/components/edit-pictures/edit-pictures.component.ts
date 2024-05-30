import { Component } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  UploadPicturePreviewComponent
} from "../upload-pictures/components/upload-picture-preview/upload-picture-preview.component";
import {
  UploadPicturesLoadingComponent
} from "../upload-pictures/components/upload-pictures-loading/upload-pictures-loading.component";
import {EditPicturePreviewComponent} from "./components/edit-picture-preview/edit-picture-preview.component";

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
    EditPicturePreviewComponent
  ],
  templateUrl: './edit-pictures.component.html'
})
export class EditPicturesComponent {
  pictures: Observable<Array<any>>;

  constructor(private firestore: Firestore) {
    this.pictures = collectionData(collection(this.firestore, 'pictures'), {idField: 'imageId'});
  }
}
