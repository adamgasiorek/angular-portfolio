import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { aboutRouting } from './about.routing';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(aboutRouting), CommonModule],
})
export class AboutModule {}
