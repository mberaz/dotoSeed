"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateFullName(control) {
    var val = control.value;
    var parts = val.split('.');
    //return true if NOT VALID
    var isValid = parts.length === 2 && parts[0].trim() !== '' && parts[1].trim() !== '';
    if (!isValid) {
        return { notValid: true };
    }
    return null;
}
exports.validateFullName = validateFullName;
//# sourceMappingURL=ValidateFullName.js.map