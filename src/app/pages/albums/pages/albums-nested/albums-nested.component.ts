import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GalleryAlbumsComponent } from '../../../../components/gallery-albums/gallery-albums.component';

@Component({
  selector: 'app-albums-nested',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, GalleryAlbumsComponent],
  templateUrl: './albums-nested.component.html',
  styleUrl: './albums-nested.component.scss',
})
export class AlbumsNestedComponent {
  albums$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.albums$ = this.route.data.pipe(map(({ data }) => data));
  }
}
