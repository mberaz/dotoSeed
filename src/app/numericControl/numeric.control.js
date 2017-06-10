"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var NumericComponent = NumericComponent_1 = (function () {
    function NumericComponent() {
        this._counterValue = 0; // notice the '_'
        this.propagateChange = function (_) { };
        //END implement ControlValueAccessor
    }
    Object.defineProperty(NumericComponent.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(this._counterValue);
        },
        enumerable: true,
        configurable: true
    });
    NumericComponent.prototype.increment = function () {
        this.counterValue++;
    };
    NumericComponent.prototype.decrement = function () {
        this.counterValue--;
    };
    //implement ControlValueAccessor      
    NumericComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.counterValue = value;
        }
    };
    NumericComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NumericComponent.prototype.registerOnTouched = function () { };
    return NumericComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NumericComponent.prototype, "counterRangeMax", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NumericComponent.prototype, "counterRangeMin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NumericComponent.prototype, "_counterValue", void 0);
NumericComponent = NumericComponent_1 = __decorate([
    core_1.Component({
        selector: 'numeric',
        template: "\n    <button (click)=\"increment()\">+</button>\n    {{counterValue}}\n    <button (click)=\"decrement()\">-</button>\n  ",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return NumericComponent_1; }),
                multi: true
            }
        ]
    })
], NumericComponent);
exports.NumericComponent = NumericComponent;
var NumericComponent_1;
//# sourceMappingURL=numeric.control.js.map