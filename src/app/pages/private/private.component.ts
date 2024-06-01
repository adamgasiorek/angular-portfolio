import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './private.component.html',
})
export class PrivateComponent {
  pictures: Observable<any[]> | undefined;

  constructor(private firestore: Firestore) {
    this.pictures = collectionData(
      query(collection(this.firestore, 'pictures'), where('country', '==', '')),
      { idField: 'imageId' }
    );
  }
}
