import { Routes } from '@angular/router';
import { VisitedComponent } from './visited.component';
import { AsiaMapComponent } from './components/asia-map/asia-map.component';

export const visitedRouting: Routes = [
  {
    path: '',
    component: VisitedComponent,
  },
  {
    path: 'asia',
    component: AsiaMapComponent,
  },
];
