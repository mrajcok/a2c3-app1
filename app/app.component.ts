import {Component}                  from '@angular/core';
import {Answer, QuestionAndAnswers} from './question-and-answers';

@Component({
  selector:   'my-app',
  template: `
    <ua-header [myTitle]="appTitle"></ua-header>
    <ua-question [question]="questionAndAnswers.question"></ua-question>
    <ua-answer *ngFor="let ans of questionAndAnswers.answers; let i=index"
        [answer]="ans" [index]="i+1" (deleteEvent)="deleteAnswer($event)">
    </ua-answer>`
})
export class AppComponent {
  appTitle = 'Udemy Course - Q&A App';
  questionAndAnswers:QuestionAndAnswers = {
    question: {  author: 'Newbie', content: 'How do I share data between multiple components?' },
    answers:  [ {author: 'Eric',   content: 'Use a service', accepted: true },
                {author: 'Mark',   content: `If the components have a parent-child relationship,
                  you can use input and output properties.  Otherwise, see Eric's answer.`}
              ]
  };
  constructor() {
    console.clear();
  }
  deleteAnswer(answer:Answer) {
    this.questionAndAnswers.answers.splice(
      this.questionAndAnswers.answers.indexOf(answer), 1);
  }
}
