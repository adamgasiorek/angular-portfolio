import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { privateRouting } from './private.routing';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(privateRouting), CommonModule],
})
export class PrivateModule {}
