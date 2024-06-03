import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { UploadPicturesComponent } from './components/upload-pictures/upload-pictures.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    DashboardNavComponent,
    UploadPicturesComponent,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
