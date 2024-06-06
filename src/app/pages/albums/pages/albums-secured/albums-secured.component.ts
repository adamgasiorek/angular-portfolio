import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GalleryAlbumsComponent } from '../../../../components/gallery-albums/gallery-albums.component';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-secured',
  standalone: true,
  imports: [AsyncPipe, GalleryAlbumsComponent],
  templateUrl: './albums-secured.component.html',
  styleUrl: './albums-secured.component.scss',
})
export class AlbumsSecuredComponent {
  albums$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.albums$ = this.route.data.pipe(map(({ data }) => data));
  }
}
