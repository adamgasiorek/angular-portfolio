import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRouting } from './home.routing';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRouting), CommonModule],
})
export class HomeModule {}
