import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { AlbumsService } from './services/albums.service';
import { Observable, of } from 'rxjs';
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
  providers: [AlbumsService],
})
export class AlbumsComponent {
  albums$: Observable<any | null> = of(null);

  constructor(private albumsService: AlbumsService) {
    this.albums$ = this.albumsService.getMainAlbums();
  }
}
