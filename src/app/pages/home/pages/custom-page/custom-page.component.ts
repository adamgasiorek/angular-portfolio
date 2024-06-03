import { Component } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { GalleryComponent } from '../../../../components/gallery/gallery.component';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, GalleryComponent],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.scss',
})
export class CustomPageComponent {
  post$: Observable<any | null> = of(null);

  constructor(private route: ActivatedRoute) {
    this.post$ = this.route.data.pipe(map(({ data }) => data));
  }
}
