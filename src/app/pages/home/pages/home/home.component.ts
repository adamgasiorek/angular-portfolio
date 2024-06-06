import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GalleryComponent } from '../../../../components/gallery/gallery.component';
import { map, Observable } from 'rxjs';
import { PageModel } from '../../../dashboard/components/upload-pictures/models/page';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, GalleryComponent, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  album$: Observable<PageModel>;

  constructor(private route: ActivatedRoute) {
    this.album$ = this.route.data.pipe(map(({ data }) => data));
  }
}
