import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Answer} from '../interfaces';

@Component({
  selector: 'ua-answer',
  templateUrl: './ua-answer.component.html',
  styleUrls: ['./ua-answer.component.css']
})
export class UaAnswerComponent {
  @Input()  answer:Answer;
  @Input()  index:number;
  @Output() deleteEvent = new EventEmitter<Answer>();
  requestDelete() {
      console.log('AnswerComponent requestDelete()')
      this.deleteEvent.emit(this.answer);
  }
}