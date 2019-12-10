import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: '/hello.component.html',
  styles: ['./hello.scss']
})
export class HelloComponent  {
  @Input() name: string;
}
