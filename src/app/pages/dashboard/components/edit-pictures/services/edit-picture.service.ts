import { Injectable } from '@angular/core';
import {deleteObject, getDownloadURL, ref, Storage, uploadBytesResumable} from "@angular/fire/storage";
import {addDoc, doc, collection, Firestore, updateDoc, deleteDoc} from "@angular/fire/firestore";
import {Picture} from "../../upload-pictures/models/picture";
import {getFileNameWithoutExtension} from "../../../../../utils/get-file-name";

@Injectable()
export class EditPictureService {

  constructor(private storage: Storage, private firestore: Firestore) { }

  async editPicture(image: any) {
    const picture = {
      country: image.country,
      tags: image.tags
    }
    await updateDoc(doc(this.firestore, 'pictures/'+image.imageId), picture);
  }

  async removePicture(imageId: string, filename: string) {
    await deleteDoc(doc(this.firestore, 'pictures/'+imageId));
    await deleteObject(ref(this.storage, filename));
    await deleteObject(ref(this.storage, getFileNameWithoutExtension(filename) + '_400x400.webp'));
  }
}
