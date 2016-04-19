import {Component, Input, ViewChild, ElementRef, Renderer} from 'angular2/core';
import {Question}  from './question-and-answers';

@Component({
  selector: 'ua-question',
  templateUrl: 'app/ua-question.component.html',
  styles: [`
    article  { margin: 1em 0; border-bottom: 1px solid #bbb; }
    input    { width: 95%; font-size: 90%; }
    input, p { margin-bottom: 0.5em; }
    p        { font-weight: bold; }
    footer   { font-style: italic; margin: 0.5em 0; }`]
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