import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';

import { routes } from './app.routes';

// Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoy2br08pXpESGwMIqXBK5p4TphUuqgoc",
  authDomain: "hr-app-ca5fc.firebaseapp.com",
  projectId: "hr-app-ca5fc",
  storageBucket: "hr-app-ca5fc.appspot.com",
  messagingSenderId: "428962663709",
  appId: "1:428962663709:web:05eb20451686e78b60e5f4",
  measurementId: "G-7T5VP9T27W"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics())
  ]
};
