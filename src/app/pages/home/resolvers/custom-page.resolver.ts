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

export const customPageResolver: ResolveFn<Observable<any[]>> = async (
  route,
  state,
  firestore: Firestore = inject(Firestore),
  auth: Auth = inject(Auth),
  router: Router = inject(Router)
) => {
  const pageData: any = await getPageData(
    firestore,
    route.paramMap.get('name')
  );
  if (!pageData) {
    router.navigate(['/', 'not-found']);
    return;
  }
  if (pageData.private) {
    const isLogged = auth.currentUser !== null;
    if (!isLogged) {
      router.navigate(['/', 'auth']);
      return;
    }
  }
  return getData(firestore, pageData.filterCountry);
};

const getPageData = (firestore: any, name: any) => {
  return firstValueFrom(
    collectionData(
      query(collection(firestore, 'pages'), where('url', '==', name)),
      { idField: 'imageId' }
    ).pipe(map((item: any) => item[0]))
  );
};

const getData = (firestore: any, filterCountry: any): any => {
  return firstValueFrom(
    collectionData(
      query(
        collection(firestore, 'pictures'),
        where('country', '==', filterCountry)
      ),
      { idField: 'imageId' }
    )
  );
};
