import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CmsService } from '../../services/cms.service';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, RouterLink, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  paragraphs: string[];
  objects: any;

  constructor(
    private cms: CmsService,
    private calendarService: CalendarService
  ) {
    this.paragraphs = this.cms.getHomeData();
    this.objects = calendarService.getTodaysEvents();
  }
}
