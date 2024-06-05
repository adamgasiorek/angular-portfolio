import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery-albums.component.html',
  styleUrl: './gallery-albums.component.scss',
})
export class GalleryAlbumsComponent {
  @Input() nestedAlbum = false;
  @Input() albums: any[] = [];
}
