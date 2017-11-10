import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import {Question}  from '../interfaces';

@Component({
  selector: 'ua-question',
  templateUrl: './ua-question.component.html',
  styleUrls: ['./ua-question.component.css']
})
export class UaQuestionComponent {
  @Input() question:Question;
  @ViewChild('input1') input1:ElementRef;
  editing = false;
  savedContent:string;
  constructor(private _renderer:Renderer) {}
  edit() {
      this.editing = true;
      this.savedContent = this.question.content;
      setTimeout(() => {  // TODO run outside Angular zone
         this._renderer.invokeElementMethod(
            this.input1.nativeElement, 'focus', []);
      });
  }
  cancel() {
      this.editing = false;
      this.question.content = this.savedContent;
  }
  save() {
      this.editing = false;
      // TODO emit event to let parent know
  }
}