import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { GalleryComponent } from '../../../../components/gallery/gallery.component';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  post$: Observable<any | null> = of(null);

  constructor(private route: ActivatedRoute) {
    this.post$ = this.route.data.pipe(map(({ data }) => data));
  }
}
