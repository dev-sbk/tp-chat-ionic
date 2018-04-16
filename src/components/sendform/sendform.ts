import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Message} from "../../providers/model/message";
import {User} from "../../providers/model/user";

/**
 * Generated class for the SendformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sendform',
  templateUrl: 'sendform.html'
})
export class SendformComponent {

  @Input() user: User;
  @Output() onSend = new EventEmitter<Message>();

  text: string;

  constructor() {

  }

  doSend() {
    let msg = new Message();
    msg.text = this.text;
    msg.date = new Date;
    msg.user = this.user;
    this.onSend.emit(msg);
  }

}
