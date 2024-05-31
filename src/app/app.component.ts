import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AuthGuardModule } from '@angular/fire/auth-guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, AuthGuardModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly testDocValue$: Observable<any>;

  constructor(firestore: Firestore) {
    const ref = collection(firestore, 'photos');
    this.testDocValue$ = collectionData(ref);
  }
}
