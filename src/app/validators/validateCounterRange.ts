import { FormControl, AbstractControl } from '@angular/forms';

export function createCounterRangeValidator(maxValue: number, minValue: number) {
    return function validateCounterRange(c: FormControl) {
        if (c.value > maxValue) {
            return { value: maxValue, error:`the value cannot be bigger then ${maxValue}`}
        }
        else if (c.value < minValue) {
            return { value: minValue,  error:`the value cannot be lower then ${minValue}` }
        }
        return null;
    }
}