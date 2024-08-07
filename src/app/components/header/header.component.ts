import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IsAuthorizedDirective } from '../../directives/is-authorized.directive';
import { IsNotAuthorizedDirective } from '../../directives/is-not-authorized.directive';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, IsAuthorizedDirective, IsNotAuthorizedDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/']);
    });
  }
}
