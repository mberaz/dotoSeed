"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCounterRangeValidator(maxValue, minValue) {
    return function validateCounterRange(c) {
        if (c.value > maxValue) {
            return { value: maxValue, error: "the value cannot be bigger then " + maxValue };
        }
        else if (c.value < minValue) {
            return { value: minValue, error: "the value cannot be lower then " + minValue };
        }
        return null;
    };
}
exports.createCounterRangeValidator = createCounterRangeValidator;
//# sourceMappingURL=validateCounterRange.js.map