import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UploadPicturesComponent } from './components/upload-pictures/upload-pictures.component';
import { EditPicturesComponent } from './components/edit-pictures/edit-pictures.component';
import { BulkPicturesComponent } from './components/bulk-pictures/bulk-pictures.component';

export const dashboardRouting: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: UploadPicturesComponent,
      },
      {
        path: 'edit',
        component: EditPicturesComponent,
      },
      {
        path: 'bulk',
        component: BulkPicturesComponent,
      },
    ],
  },
];
