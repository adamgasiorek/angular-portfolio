import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(s => s.HomeModule),
  },
  {
    path: 'visited',
    loadChildren: () =>
      import('./pages/visited/visited.module').then(s => s.VisitedModule),
  },
  {
    path: 'pictures',
    loadChildren: () =>
      import('./pages/pictures/pictures.module').then(s => s.PicturesModule),
  },
];
