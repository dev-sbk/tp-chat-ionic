import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Message} from "../model/message";


@Injectable()
export class MessagingProvider {


  constructor(private db: AngularFireDatabase) {

  }

  getAll () : Observable<Message[]> {
    return this.db.list<Message>('messages').valueChanges();
  }


  send (msg: Message) {
     this.db.list<Message>('messages').push(msg);
  }

}
