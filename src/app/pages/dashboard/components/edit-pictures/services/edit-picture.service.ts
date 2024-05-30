import { Injectable } from '@angular/core';
import {getDownloadURL, ref, Storage, uploadBytesResumable} from "@angular/fire/storage";
import {addDoc, doc, collection, Firestore, updateDoc} from "@angular/fire/firestore";
import {Picture} from "../../upload-pictures/models/picture";

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

}
