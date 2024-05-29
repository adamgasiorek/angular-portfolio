import { Component } from '@angular/core';
import {Auth, signOut} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private auth: Auth, private router: Router) {
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['auth']);
    });
  }
}
