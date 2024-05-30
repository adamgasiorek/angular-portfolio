import {AfterViewInit, ChangeDetectorRef, Component, Input} from '@angular/core';
import {Picture} from "../../../upload-pictures/models/picture";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SelectCountryComponent} from "../../../forms/select-country/select-country.component";
import {SelectTagsComponent} from "../../../forms/select-tags/select-tags.component";
import {JsonPipe, NgClass} from "@angular/common";
import {EditPictureService} from "../../services/edit-picture.service";

@Component({
  selector: 'app-edit-picture-preview',
  standalone: true,
  imports: [
    SelectCountryComponent,
    SelectTagsComponent,
    JsonPipe,
    ReactiveFormsModule,
    NgClass
  ],
  providers: [EditPictureService],
  templateUrl: './edit-picture-preview.component.html'
})
export class EditPicturePreviewComponent implements AfterViewInit {
  @Input() picture!: any;
  pictureForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,
              private editPictureService: EditPictureService,
              private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.pictureForm = this.formBuilder.nonNullable.group({
      imageId: [this.picture.imageId, [Validators.required]],
      saveLoading: [false],
      tags: [this.picture.tags, []],
      country: [this.picture.country, [Validators.required]]
    });
    this.cdr.detectChanges();
  }

  async edit() {
    this.pictureForm!.patchValue({saveLoading: true});
    await this.editPictureService.editPicture(this.pictureForm!.value);
    this.pictureForm!.patchValue({saveLoading: false});
  }
}
