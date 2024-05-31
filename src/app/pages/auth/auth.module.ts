import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRouting } from './auth.routing';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(authRouting), CommonModule],
})
export class AuthModule {}
