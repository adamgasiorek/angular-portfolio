import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';

@Component({
  selector: 'app-visited',
  standalone: true,
  imports: [AsyncPipe, RouterLink, PageLayoutComponent],
  templateUrl: './visited.component.html',
  styleUrl: './visited.component.scss',
})
export class VisitedComponent {}
