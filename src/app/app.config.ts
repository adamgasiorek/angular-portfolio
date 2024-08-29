import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  InMemoryScrollingFeature,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling({
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
  });

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'adamgasiorek-website',
        appId: '1:61029913955:web:728f4d193defb1bc28af56',
        storageBucket: 'adamgasiorek-website.appspot.com',
        apiKey: 'AIzaSyBhQ0HspJxPbo7FdYTWa7GwbeYgI7lajNY',
        authDomain: 'adamgasiorek-website.firebaseapp.com',
        messagingSenderId: '61029913955',
        measurementId: 'G-22896KDKPC',
      })
    ),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
  ],
};
