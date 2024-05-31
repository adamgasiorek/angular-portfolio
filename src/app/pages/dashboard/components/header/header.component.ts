import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['auth']);
    });
  }
}
