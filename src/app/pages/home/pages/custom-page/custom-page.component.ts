import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GalleryComponent } from '../../../../components/gallery/gallery.component';
import { PageModel } from '../../../dashboard/components/upload-pictures/models/page';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, GalleryComponent],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.scss',
})
export class CustomPageComponent {
  album$: Observable<PageModel>;

  constructor(private route: ActivatedRoute) {
    this.album$ = this.route.data.pipe(map(({ data }) => data));
  }
}
