import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UaHeaderComponent } from './ua-header/ua-header.component';
import { UaQuestionComponent } from './ua-question/ua-question.component';
import { UaAnswerComponent } from './ua-answer/ua-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    UaHeaderComponent,
    UaQuestionComponent,
    UaAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
