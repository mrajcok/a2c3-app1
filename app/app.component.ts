import {Component}           from '@angular/core';
import {UaHeaderComponent}   from './ua-header.component';
import {UaQuestionComponent} from './ua-question.component';
import {UaAnswerComponent}   from './ua-answer.component';
import {Answer, QuestionAndAnswers} from './question-and-answers';

@Component({
  selector:   'my-app',
  directives: [UaHeaderComponent, UaQuestionComponent, UaAnswerComponent],
  template: `
    <ua-header [myTitle]="appTitle"></ua-header>
    <ua-question [question]="questionAndAnswers.question"></ua-question>
    <ua-answer *ngFor="#ans of questionAndAnswers.answers; #i=index"
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
