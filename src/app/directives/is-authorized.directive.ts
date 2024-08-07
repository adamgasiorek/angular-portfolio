import {
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Auth, authState, User } from '@angular/fire/auth';

@Directive({
  selector: '[appIsAuthorized]',
  standalone: true,
})
export class IsAuthorizedDirective implements OnDestroy {
  private authSubscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private afAuth: Auth
  ) {
    this.authSubscription = authState(this.afAuth).subscribe((user: User) => {
      if (user) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
