import { Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumsNestedComponent } from './pages/albums-nested/albums-nested.component';

export const albumsRouting: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  },
  {
    path: ':album',
    component: AlbumsNestedComponent,
  },
];
