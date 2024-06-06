import { ResolveFn, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { getPageData } from '../../../utils/get-page-data';
import { PageModel } from '../../dashboard/components/upload-pictures/models/page';
import { getPicturesForPage } from '../../../utils/get-pictures-for-page';

export const mainPageResolver: ResolveFn<Observable<PageModel>> = (
  route,
  state,
  firestore: Firestore = inject(Firestore),
  auth: Auth = inject(Auth),
  router: Router = inject(Router)
): Observable<PageModel> => {
  return getPageData(firestore, 'main').pipe(
    switchMap((data: any) =>
      getPicturesForPage(firestore, data.filterCountry, data.filterTags).pipe(
        map((res: any) => ({
          name: data.name,
          pictures: res,
        }))
      )
    )
  );
};
