import { Injectable } from '@angular/core';
import {getDownloadURL, ref, Storage, uploadBytesResumable} from "@angular/fire/storage";
import {UploadValue} from "../models/upload-value";



@Injectable()
export class UploadPictureService {

  constructor(private storage: Storage) { }

  async upload(file: File): Promise<any> {
      const prefix = 'drafts/'
      const storageRef = ref(this.storage, prefix+file.name);
      const response = await uploadBytesResumable(storageRef, file);
      const image = await getDownloadURL(response.ref);
      setTimeout(async () => {}, 4000);
      const thumbnailRef = ref(this.storage, prefix+this.getFileNameWithoutExtension(file.name) + '_400x400.webp');
      const thumbnail = await getDownloadURL(thumbnailRef);
      return {image, thumbnail, filename: file.name, file};
  }


  async save(images: Array<UploadValue>, folder: string) {
    const prefix = this.checkFolderName(folder);
    for(let image of images) {
      const storageRef = ref(this.storage, prefix+image.filename);
      await uploadBytesResumable(storageRef, image.file);
    }
  }

  private getFileNameWithoutExtension(filename: string) {
    const parts = filename.split('.');
    parts.pop();
    return parts.join('.');
  }

  private checkFolderName(folder: string) {
    if (folder.slice(-1) !== '/') {
      folder += '/';
    }
    return folder;
  }

}
