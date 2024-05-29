import { Component } from '@angular/core';
import {Auth, authState, signOut, User} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {EMPTY, Observable} from "rxjs";
import {HeaderComponent} from "./components/header/header.component";
import {UploadPicturesComponent} from "./components/upload-pictures/upload-pictures.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    HeaderComponent,
    UploadPicturesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


}
