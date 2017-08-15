"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../users/user");
var core_1 = require("@angular/core");
var ConditionComponent = (function () {
    function ConditionComponent() {
        this.user = null;
    }
    ConditionComponent.prototype.setuser = function () {
        this.user = new user_1.User(1, 'michael', 'berezin', 'mmm@gmail.com');
    };
    return ConditionComponent;
}());
ConditionComponent = __decorate([
    core_1.Component({
        selector: 'app-condition',
        templateUrl: './condition.component.html',
    })
], ConditionComponent);
exports.ConditionComponent = ConditionComponent;
//# sourceMappingURL=condition.component.js.map