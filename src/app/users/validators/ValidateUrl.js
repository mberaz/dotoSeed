"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
function ValidateUrl(control) {
    //return true if NOT VALID
    var isValid = control.value.startsWith('http:') || control.value.startsWith('https:');
    if (!isValid) {
        return { valid: true };
    }
    return null;
}
exports.ValidateUrl = ValidateUrl;
//# sourceMappingURL=ValidateUrl.js.map