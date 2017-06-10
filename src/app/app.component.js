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
var modal_service_1 = require("./modal/modal.service");
var AppComponent = (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        this.bodyText = 'this is a text for baron';
        this.name = 'Angular';
        this.title = 'app works!';
        this.appPageTitle = 'todos seed app';
    }
    AppComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    AppComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./modal/modal.css']
    }),
    __metadata("design:paramtypes", [modal_service_1.ModalService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map