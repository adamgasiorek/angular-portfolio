import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRouting } from './home.routing';
import { CmsService } from '../../services/cms.service';
import { provideHttpClient } from '@angular/common/http';
import { CalendarService } from '../../services/calendar.service';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRouting), CommonModule],
  providers: [CmsService, CalendarService, provideHttpClient()],
})
export class HomeModule {}
