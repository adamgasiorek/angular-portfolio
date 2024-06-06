import { ResolveFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlbumsService } from '../services/albums.service';

export const albumsTravelResolver: ResolveFn<Observable<any>> = (
  route,
  state,
  firestore: Firestore = inject(Firestore),
  albumsService: AlbumsService = inject(AlbumsService),
  auth: Auth = inject(Auth),
  router: Router = inject(Router)
): Observable<any> => {
  return albumsService.getAlbumsTravel();
};
