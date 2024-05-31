import { Injectable } from '@angular/core';
import {
  deleteObject,
  ref,
  Storage,
} from '@angular/fire/storage';
import {
  doc,
  Firestore,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { getFileNameWithoutExtension } from '../../../../../utils/get-file-name';

@Injectable()
export class EditPictureService {
  constructor(
    private storage: Storage,
    private firestore: Firestore
  ) {}

  async editPicture(image: any) {
    const picture = {
      country: image.country,
      tags: image.tags,
    };
    await updateDoc(doc(this.firestore, 'pictures/' + image.imageId), picture);
  }

  async removePicture(imageId: string, filename: string) {
    await deleteDoc(doc(this.firestore, 'pictures/' + imageId));
    await deleteObject(ref(this.storage, filename));
    await deleteObject(
      ref(this.storage, getFileNameWithoutExtension(filename) + '_400x400.webp')
    );
  }
}
