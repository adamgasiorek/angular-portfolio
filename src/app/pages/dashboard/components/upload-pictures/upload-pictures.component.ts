import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {UploadBoxComponent} from "./upload-box/upload-box.component";
import {ref, uploadBytesResumable, Storage, getDownloadURL} from "@angular/fire/storage";
import {AsyncPipe} from "@angular/common";

interface UploadPicture {
  file: File;
  loading: boolean;
  image: string;
  thumbnail: string;
}

@Component({
  selector: 'app-upload-pictures',
  standalone: true,
  imports: [
    UploadBoxComponent,
    AsyncPipe
  ],
  templateUrl: './upload-pictures.component.html',
  styleUrl: './upload-pictures.component.scss'
})
export class UploadPicturesComponent {
  images: Array<UploadPicture> = [];

  constructor(private storage: Storage) {
  }

  async onFilesSelected(files: File[]) {
    let index = 0;
    for (const file of files) {
      if (file) {
        const prefix = 'drafts/'
        const storageRef = ref(this.storage, prefix+file.name);
        this.images.push({image: '', thumbnail: '', loading: true, file});
        const response = await uploadBytesResumable(storageRef, file);
        const image = await getDownloadURL(response.ref);
        setTimeout(async () => {
          const thumbnailRef = ref(this.storage, prefix+this.getFileNameWithoutExtension(file.name) + '_400x400.webp');
          const thumbnail = await getDownloadURL(thumbnailRef);
          this.images[index] = ({image, thumbnail, loading: false, file: this.images[index].file});
          index++;
        }, 4000);
      }
    }
  }

  async save() {
    for(let image of this.images) {
      const prefix = 'prod/'
      const storageRef = ref(this.storage, prefix+image.file.name);
      await uploadBytesResumable(storageRef, image.file);
    }
  }

  getFileNameWithoutExtension(filename: string) {
    const parts = filename.split('.');
    parts.pop();
    return parts.join('.');
  }

}
