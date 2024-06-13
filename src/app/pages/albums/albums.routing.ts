import { Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumsNestedComponent } from './pages/albums-nested/albums-nested.component';
import { AlbumsSecuredComponent } from './pages/albums-secured/albums-secured.component';
import { albumsTravelResolver } from './resolvers/albums-travel.resolver';
import { albumsFamilyResolver } from './resolvers/albums-family.resolver';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { albumsNestedResolver } from './resolvers/albums-nested.resolver';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

export const albumsRouting: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    resolve: { data: albumsTravelResolver },
  },
  {
    path: 'secured',
    component: AlbumsSecuredComponent,
    resolve: { data: albumsFamilyResolver },
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'secured/:album',
    component: AlbumsNestedComponent,
    resolve: { data: albumsNestedResolver },
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: ':album',
    component: AlbumsNestedComponent,
    resolve: { data: albumsNestedResolver },
  },
];
