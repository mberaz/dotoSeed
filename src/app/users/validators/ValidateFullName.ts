import { FormControl, AbstractControl } from '@angular/forms';

export function validateFullName(control: AbstractControl) {
  var val = control.value;
  var parts = val.split('.');
  //return true if NOT VALID
  var isValid=parts.length === 2 && parts[0].trim() !=='' && parts[1].trim() !=='';
  if (!isValid) {
    return { valid: true };
  }
  return null;
}