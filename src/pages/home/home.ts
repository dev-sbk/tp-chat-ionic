import {Component, OnInit} from '@angular/core';
import {Message} from "../../providers/model/message";
import {Authentication} from "../../providers/authentication/authentication";
import {MessagingProvider} from "../../providers/messaging/messaging";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  auth: Authentication;
  messages: Message[];

  constructor(private messaging: MessagingProvider, auth: Authentication) {

    this.auth = auth;
  }

  doLogin(): void {
    this.auth.login();
  }

  doLogout(): void {
    this.auth.logout();
  }


  ngOnInit(): void {
    this.messaging.getAll().subscribe
    (
      (messages: Message[]) => this.messages = messages
    );
  }

  doSend(msg: Message) {
    this.messaging.send(msg);
  }

}
