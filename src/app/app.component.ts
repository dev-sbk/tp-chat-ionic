import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyBIDIsvE1tDlt27U_kG0yoBCa0kyKA6xtg",
  authDomain: "tp-firebase-b3058.firebaseapp.com",
  databaseURL: "https://tp-firebase-b3058.firebaseio.com",
  projectId: "tp-firebase-b3058",
  storageBucket: "tp-firebase-b3058.appspot.com",
  messagingSenderId: "764706518640"
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(config);
  }
}

