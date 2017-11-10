import { Component, Input } from '@angular/core';

@Component({
  selector:  'ua-header',
  template:  `<h1>{{title}}</h1>`,
  styles:    [`h1 { color: steelblue; text-align: center; font-size: 120%; margin: 0.5em; }`]
})
export class UaHeaderComponent {
  @Input('myTitle') title:string;
}
