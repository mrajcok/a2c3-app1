import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Answer} from './question-and-answers';

@Component({
  selector: 'ua-answer',
  template: `
    <article>
        <header>
            <span [class.accepted-answer]="answer.accepted">#{{index}}</span>
            <div *ngIf="answer.accepted">&#10004;</div>
        </header>
        <p>{{answer.content}}</p>
        <button (click)="requestDelete()">delete</button>
        <footer>{{answer.author}}</footer>
    </article>`,
  styles: [`
    article   { margin: 0.5em 0 0.5em 2.5em; border-bottom: 1px solid #ddd; }
    header    { margin-left: -2.5em; float: left; }
    header div{ color: green; font-size: x-large; }
    p, footer { margin: 0.5em 0; }
    footer    { font-style: italic; font-size: smaller; }
    .accepted-answer { font-weight: bold; }`]
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