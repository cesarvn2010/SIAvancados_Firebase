import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AutenticarProvider } from '../providers/autenticar/autenticar';

export const firebaseConfig = {
  
    apiKey: "AIzaSyCwIhGpqJ-C5NttREgvrSvkCSLNQm1tuZY",
    authDomain: "projetoaula-47056.firebaseapp.com",
    databaseURL: "https://projetoaula-47056.firebaseio.com",
    projectId: "projetoaula-47056",
    storageBucket: "projetoaula-47056.appspot.com",
    messagingSenderId: "110262303768"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticarProvider
  ]
})
export class AppModule {}
