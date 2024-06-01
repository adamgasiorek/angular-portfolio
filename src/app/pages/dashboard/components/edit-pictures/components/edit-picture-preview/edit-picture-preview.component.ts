import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectCountryComponent } from '../../../forms/select-country/select-country.component';
import { SelectTagsComponent } from '../../../forms/select-tags/select-tags.component';
import { JsonPipe, NgClass } from '@angular/common';
import { EditPictureService } from '../../services/edit-picture.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-edit-picture-preview',
  standalone: true,
  imports: [
    SelectCountryComponent,
    SelectTagsComponent,
    JsonPipe,
    ReactiveFormsModule,
    NgClass,
    MatSlideToggle,
  ],
  providers: [EditPictureService],
  templateUrl: './edit-picture-preview.component.html',
})
export class EditPicturePreviewComponent implements AfterViewInit {
  @Input() picture!: any;
  pictureForm: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private editPictureService: EditPictureService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.pictureForm = this.formBuilder.nonNullable.group({
      imageId: [this.picture.imageId, [Validators.required]],
      saveLoading: [false],
      removeLoading: [false],
      private: [false],
      tags: [this.picture.tags, []],
      country: [this.picture.country, [Validators.required]],
    });
    this.cdr.detectChanges();
  }

  async edit() {
    this.pictureForm!.patchValue({ saveLoading: true });
    await this.editPictureService.editPicture(this.pictureForm!.value);
    this.pictureForm!.patchValue({ saveLoading: false });
  }

  async remove(event: any) {
    event.preventDefault();
    await this.editPictureService.removePicture(
      this.pictureForm!.value.imageId,
      this.picture.filename
    );
  }
}
