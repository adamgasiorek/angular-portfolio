import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
  and,
  where,
  orderBy,
} from '@angular/fire/firestore';
import { combineLatest } from 'rxjs';

@Injectable()
export class AlbumsService {
  constructor(private firestore: Firestore) {}

  getAlbumsTravel() {
    return combineLatest([
      collectionData(
        query(
          collection(this.firestore, 'albums'),
          and(where('isTravel', '==', true), where('group', '==', 'Other'))
        ),
        {
          idField: 'id',
        }
      ),
      collectionData(
        query(
          collection(this.firestore, 'albums'),
          and(where('isTravel', '==', true), where('group', '==', 'travel')),
          orderBy('name')
        ),
        {
          idField: 'id',
        }
      ),
    ]);
  }

  getAlbumsFamily() {
    return collectionData(
      query(
        collection(this.firestore, 'albums'),
        where('isFamily', '==', true)
      ),
      {
        idField: 'id',
      }
    );
  }

  getAlbums(id: any) {
    return collectionData(
      query(collection(this.firestore, `albums/${id}/albums`)),
      {
        idField: 'id',
      }
    );
  }
}
