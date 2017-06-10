import { FormControl ,AbstractControl} from '@angular/forms';


//https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
export function ValidateUrl(control: AbstractControl) {
  //return true if NOT VALID
  var isValid=control.value.startsWith('http:') || control.value.startsWith('https:');
  if ( !isValid) {
    return { valid: true };
  }
  return null;
}
