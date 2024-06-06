import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GalleryAlbumsComponent } from '../../components/gallery-albums/gallery-albums.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
  imports: [
    HeaderComponent,
    RouterLink,
    AsyncPipe,
    JsonPipe,
    GalleryAlbumsComponent,
  ],
})
export class AlbumsComponent {
  albums$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.albums$ = this.route.data.pipe(map(({ data }) => data));
  }
}
