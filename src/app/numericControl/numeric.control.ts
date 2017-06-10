import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Input, forwardRef, Component, } from "@angular/core";
import { validateFullName } from './../validators/ValidateFullName';


@Component({
    selector: 'numeric',
    template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumericComponent),
            multi: true
        }
    ]
})
export class NumericComponent implements ControlValueAccessor {

    @Input()
    counterRangeMax: number;

    @Input()
    counterRangeMin: number;

    @Input()
    _counterValue = 0; // notice the '_'

    get counterValue() {
        return this._counterValue;
    }

    set counterValue(val) {
        this._counterValue = val;
        this.propagateChange(this._counterValue);
    }

    increment() {
        this.counterValue++;
    }

    decrement() {
        this.counterValue--;
    }



    //implement ControlValueAccessor      
    writeValue(value: any) {
        if (value !== undefined) {
            this.counterValue = value;
        }
    }
    propagateChange = (_: any) => { };

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched() { }
    //END implement ControlValueAccessor
}

