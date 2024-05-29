import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-upload-box',
  standalone: true,
  imports: [
    DragDropModule,
  ],
  templateUrl: './upload-box.component.html',
  styleUrl: './upload-box.component.scss'
})
export class UploadBoxComponent {

  private _isDragging: boolean = false;

  constructor() { }

  @ViewChild('fileSelector', {static: true}) public fileSelector: ElementRef | any;
  @Output() public selectedFiles = new EventEmitter<File[]>();

  public get isDragging(): boolean { return this._isDragging; }

  public onDrop(event: any): void {
    // Stop browser opening the file
    event.preventDefault();
    this._isDragging = false;

    const result = [];
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (const item of event.dataTransfer.items) {
        if (item.kind !== 'file') {
          return;
        }
        result.push(item.getAsFile());
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (const file of event.dataTransfer.files) {
        result.push(file);
      }
    }

    this.emitFiles(result);
  }

  public onFilesSelected(data: any): void {
    const files = data.files;
    if (files == undefined || files.length === 0) {
      return;
    }

    const result = [];
    for (const file of files) {
      result.push(file);
    }

    this.fileSelector.nativeElement.value = ''; // required to trigger (change) if user immediately uploads same named file
    this.emitFiles(result);
  }

  public onDragOver(event: any): void {
    // Stop browser opening the file
    event.preventDefault();
    this._isDragging = true;
  }

  public stopDrag(event: any): void {
    this._isDragging = false;
    event.preventDefault();
    event.stopPropagation();
  }


  private emitFiles(files: File[]): void {
    this.selectedFiles.emit(files);
  }

}
