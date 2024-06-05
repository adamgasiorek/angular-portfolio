import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
} from '@angular/fire/firestore';

@Injectable()
export class AlbumsService {
  constructor(private firestore: Firestore) {}

  getMainAlbums() {
    return collectionData(query(collection(this.firestore, 'albums')), {
      idField: 'id',
    });
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
