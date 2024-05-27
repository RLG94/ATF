import { ApplicationConfig } from '@angular/core';
import { provideRouter,withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withHashLocation()), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"apptf-934a6","appId":"1:1067801231660:web:fa062d57b65044009e6c89","storageBucket":"apptf-934a6.appspot.com","apiKey":"AIzaSyBueo3t_qTi4Ggt3EgXnhYmaM-YtlPtTr8","authDomain":"apptf-934a6.firebaseapp.com","messagingSenderId":"1067801231660","measurementId":"G-JNSBSFV2C0"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
