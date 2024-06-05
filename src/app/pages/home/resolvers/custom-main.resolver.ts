import { ResolveFn, Router } from '@angular/router';
import { firstValueFrom, map, Observable } from 'rxjs';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { capitalize } from '../../../utils/capitalize';

export const customMainResolver: ResolveFn<Observable<any[]>> = async (
  route,
  state,
  firestore: Firestore = inject(Firestore),
  auth: Auth = inject(Auth),
  router: Router = inject(Router)
) => {
  const pageData: any = await getPageData(firestore, 'main');
  if (!pageData) {
    router.navigate(['/', 'not-found']);
    return;
  }

  return getData(firestore, pageData.filterTags);
};

const getPageData = (firestore: any, name: any) => {
  return firstValueFrom(
    collectionData(
      query(collection(firestore, 'pages'), where('url', '==', name)),
      { idField: 'imageId' }
    ).pipe(map((item: any) => item[0]))
  );
};

const getData = (firestore: any, filterTags: any): any => {
  return firstValueFrom(
    collectionData(
      query(
        collection(firestore, 'pictures'),
        where('tags', 'array-contains', capitalize(filterTags))
      ),
      { idField: 'imageId' }
    )
  );
};
