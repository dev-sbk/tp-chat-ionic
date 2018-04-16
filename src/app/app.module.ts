import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {MessageComponent} from "../components/message/message";
import {Authentication} from "../providers/authentication/authentication";
import { MessagingProvider } from '../providers/messaging/messaging';
import {SendformComponent} from "../components/sendform/sendform";


const config = {
  apiKey: "AIzaSyBIDIsvE1tDlt27U_kG0yoBCa0kyKA6xtg",
  authDomain: "tp-firebase-b3058.firebaseapp.com",
  databaseURL: "https://tp-firebase-b3058.firebaseio.com",
  projectId: "tp-firebase-b3058",
  storageBucket: "tp-firebase-b3058.appspot.com",
  messagingSenderId: "764706518640"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessageComponent,
    SendformComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    Authentication,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessagingProvider
  ]
})
export class AppModule {}
