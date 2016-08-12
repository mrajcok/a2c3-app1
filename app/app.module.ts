import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { AppComponent }        from './app.component';
import { UaHeaderComponent }   from './ua-header.component';
import { UaQuestionComponent } from './ua-question.component';
import { UaAnswerComponent }   from './ua-answer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UaHeaderComponent, UaQuestionComponent, UaAnswerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
