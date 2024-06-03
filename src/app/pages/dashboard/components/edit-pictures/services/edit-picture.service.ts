import { Injectable } from '@angular/core';
import { deleteObject, ref, Storage } from '@angular/fire/storage';
import { doc, Firestore, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { getFileNameWithoutExtension } from '../../../../../utils/get-file-name';
import { getIconPath } from '../../../../../utils/get-icon-path';

@Injectable()
export class EditPictureService {
  constructor(
    private storage: Storage,
    private firestore: Firestore
  ) {}

  async editPicture(image: any) {
    const picture = {
      private: image.private,
      country: image.country,
      tags: image.tags,
    };
    await updateDoc(doc(this.firestore, 'pictures/' + image.imageId), picture);
  }

  async removePicture(imageId: string, filename: string) {
    await deleteDoc(doc(this.firestore, 'pictures/' + imageId));
    await deleteObject(ref(this.storage, filename));
    await deleteObject(
      ref(this.storage, getIconPath(getFileNameWithoutExtension(filename)))
    );
  }
}
