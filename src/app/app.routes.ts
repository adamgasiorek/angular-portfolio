import { Routes } from '@angular/router';
import {
  AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () =>
      import('./pages/auth/auth.module').then(s => s.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(s => s.DashboardModule),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./pages/albums/albums.module').then(s => s.AlbumsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(s => s.AboutModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(s => s.HomeModule),
  },
];
