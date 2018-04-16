import {Component, Input} from '@angular/core';
import {Message} from "../../providers/model/message";
import {User} from "../../providers/model/user";

/**
 * Generated class for the MessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {

  //c'est un input
  @Input() messages: Message[];
  @Input() user: User;

  constructor() {

  }
}
