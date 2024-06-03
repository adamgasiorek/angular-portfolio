import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { customPageResolver } from './resolvers/custom-page.resolver';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const homeRouting: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: ':name',
    component: CustomPageComponent,
    resolve: { data: customPageResolver },
  },
];
