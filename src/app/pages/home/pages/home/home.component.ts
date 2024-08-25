import { Component } from '@angular/core';
import { CmsService } from '../../../../services/cms.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items$: Observable<any>;

  constructor(private cmsService: CmsService) {
    this.items$ = this.cmsService.getAllData();
  }
}
