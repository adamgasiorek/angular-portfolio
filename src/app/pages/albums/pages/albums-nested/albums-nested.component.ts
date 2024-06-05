import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GalleryAlbumsComponent } from '../../../../components/gallery-albums/gallery-albums.component';

@Component({
  selector: 'app-albums-nested',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, GalleryAlbumsComponent],
  templateUrl: './albums-nested.component.html',
  styleUrl: './albums-nested.component.scss',
  providers: [AlbumsService],
})
export class AlbumsNestedComponent {
  albums$: Observable<any | null> = of(null);

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      const id = params['album'];

      this.albums$ = this.albumsService.getAlbums(id);
    });
  }
}
