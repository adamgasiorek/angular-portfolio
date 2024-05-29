import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {dashboardRouting} from "./dashboard.routing";
import {AuthGuardModule} from "@angular/fire/auth-guard";
import {AuthModule} from "@angular/fire/auth";



@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    RouterModule.forChild(dashboardRouting),
    CommonModule
  ]
})
export class DashboardModule { }
