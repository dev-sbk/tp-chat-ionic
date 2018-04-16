import { Injectable } from '@angular/core';
import firebase from "firebase";
import {User} from "../model/user";


@Injectable()
export class Authentication {

  public chatUser: any = null;

  constructor() {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.chatUser = new User(user);
        console.log(user)
      } else {
        this.chatUser = null;
      }
    });
  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then(result => {
        var user = result.user;
      }).catch(function (error) {
        console.log(error);
      });
    });
  }

  logout(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signOut().then(function () {
      console.log("Logout successful");
    }, function (error) {
      console.log(error);
    });
  }

}
