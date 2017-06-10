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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ValidateUrl_1 = require("./validators/ValidateUrl");
var ValidateFullName_1 = require("./validators/ValidateFullName");
var UserComponent = (function () {
    function UserComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.events = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            firstname: ['', [forms_1.Validators.required]],
            lastname: ['', [forms_1.Validators.required]],
            fullname: ['', [ValidateFullName_1.validateFullName]],
            url: ['', [ValidateUrl_1.ValidateUrl]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]]
            // address: this.formBuilder.group({
            //     street: [],
            //     zip: [],
            //     city: []
            // })
        });
        //this.subcribeToFormChanges();
    };
    UserComponent.prototype.updateUrl = function () {
        // (<FormControl>this.registerForm.controls['name'])
        this.registerForm.controls.url.setValue('http://baron.com', { onlySelf: true });
    };
    UserComponent.prototype.save = function (model, isValid) {
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    };
    UserComponent.prototype.subcribeToFormChanges = function () {
        var _this = this;
        // initialize stream
        var myFormValueChanges$ = this.registerForm.valueChanges;
        // subscribe to the stream 
        myFormValueChanges$.subscribe(function (x) { return _this.events
            .push({ event: 'STATUS CHANGED', object: x }); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map