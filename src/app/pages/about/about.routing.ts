import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { VisitedComponent } from './pages/visited/visited.component';
import { AsiaMapComponent } from './pages/visited/components/asia-map/asia-map.component';

export const aboutRouting: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'visited',
    component: VisitedComponent,
  },
  {
    path: 'visited/asia',
    component: AsiaMapComponent,
  },
];
