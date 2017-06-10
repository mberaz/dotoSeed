
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'custom-counter',
  template: `
    <button (click)="decrement()">-</button>
    <span>{{counter}}</span>
    <button (click)="increment()">+</button>
  `
})
export class CustomCounterComponent {

  counterValue = 5;

  @Input()
  get counter() {
    return this.counterValue;
  }
  @Output() counterChange = new EventEmitter();
  set counter(val) {
    this.counterValue= val;
    this.counterChange.emit( this.counterValue);
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}