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
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(s => s.HomeModule),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./pages/private/private.module').then(s => s.PrivateModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(s => s.DashboardModule),
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () =>
      import('./pages/auth/auth.module').then(s => s.AuthModule),
  },
];
