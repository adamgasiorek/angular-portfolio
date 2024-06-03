import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dashboard-nav.component.html',
})
export class DashboardNavComponent {
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
