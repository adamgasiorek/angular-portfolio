import { map } from 'rxjs';
import {
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';

export const getPageData = (firestore: any, name: any) => {
  return collectionData(
    query(collection(firestore, 'pages'), where('url', '==', name)),
    { idField: 'imageId' }
  ).pipe(map((item: any) => item[0]));
};
