import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { picturesRouting } from './pictures.routing';
import { CmsService } from '../../services/cms.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(picturesRouting), CommonModule],
  providers: [CmsService, provideHttpClient()],
})
export class PicturesModule {}
