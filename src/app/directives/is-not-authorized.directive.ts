import {
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Auth, authState, User } from '@angular/fire/auth';

@Directive({
  selector: '[appIsNotAuthorized]',
  standalone: true,
})
export class IsNotAuthorizedDirective implements OnDestroy {
  private authSubscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private afAuth: Auth
  ) {
    this.authSubscription = authState(this.afAuth).subscribe((user: User) => {
      if (user) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
