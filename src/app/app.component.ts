import { Component } from '@angular/core';
import {Answer, QuestionAndAnswers} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
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
