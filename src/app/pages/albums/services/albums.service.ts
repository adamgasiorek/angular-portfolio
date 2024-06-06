import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable()
export class AlbumsService {
  constructor(private firestore: Firestore) {}

  getAlbumsTravel() {
    return collectionData(
      query(
        collection(this.firestore, 'albums'),
        where('isTravel', '==', true)
      ),
      {
        idField: 'id',
      }
    );
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
