import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { UploadValue } from '../models/upload-value';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Picture } from '../models/picture';
import { timeout } from '../../../../../utils/timeout';
import { getFileNameWithoutExtension } from '../../../../../utils/get-file-name';
import { getIconPath } from '../../../../../utils/get-icon-path';

@Injectable()
export class UploadPictureService {
  constructor(
    private storage: Storage,
    private firestore: Firestore
  ) {}

  async upload(file: File): Promise<any> {
    const prefix = 'drafts/';
    const storageRef = ref(this.storage, prefix + file.name);
    const response = await uploadBytesResumable(storageRef, file);
    const image = await getDownloadURL(response.ref);
    await timeout(6000);
    const thumbnailRef = ref(
      this.storage,
      getIconPath(prefix + getFileNameWithoutExtension(file.name))
    );
    const thumbnail = await getDownloadURL(thumbnailRef);
    return { image, thumbnail, filename: file.name, file };
  }

  async save(images: UploadValue[], folder: string) {
    const prefix = this.checkFolderName(folder);
    for (const image of images) {
      const storageRef = ref(this.storage, prefix + image.filename);
      await uploadBytesResumable(storageRef, image.file);
      const imageLink = await getDownloadURL(storageRef);
      const thumbnailLink =
        getIconPath(
          imageLink.split('?alt=media')[0].split('.').slice(0, -1).join('.')
        ) + '?alt=media';
      await this.saveInDatabase(
        { ...image, image: imageLink, thumbnail: thumbnailLink },
        prefix
      );
    }
  }

  private async saveInDatabase(image: UploadValue, prefix: string) {
    const doc: Picture = {
      private: image.private,
      country: image.country,
      thumbnail: image.thumbnail,
      filename: prefix + image.filename,
      image: image.image,
      tags: image.tags,
      isVideo: image.isVideo,
      isTall: image.isTall,
    };
    await addDoc(collection(this.firestore, 'pictures'), doc);
  }

  private checkFolderName(folder: string) {
    if (folder.slice(-1) !== '/') {
      folder += '/';
    }
    return folder;
  }
}
