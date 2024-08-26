import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { visitedRouting } from './visited.routing';
import { CmsService } from '../../services/cms.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(visitedRouting), CommonModule],
  providers: [CmsService, provideHttpClient()],
})
export class VisitedModule {}
