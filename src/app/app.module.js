"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var page_title_component_1 = require("./page-title/page-title.component");
var task_creator_component_1 = require("./task-creator/task-creator.component");
var task_list_component_1 = require("./task-list/task-list.component");
var task_item_component_1 = require("./task-item/task-item.component");
var task_service_1 = require("./task.service");
var user_component_1 = require("./users/user.component");
var capitalize_pipe_1 = require("./Pipes/capitalize.pipe");
var search_pipe_1 = require("./Pipes/search.pipe");
var filter_pipe_1 = require("./Pipes/filter.pipe");
var modal_directive_1 = require("./modal/modal.directive ");
var modal_service_1 = require("./modal/modal.service");
var custom_counterComponent_1 = require("./custom-counter/custom-counterComponent");
var numeric_control_1 = require("./numericControl/numeric.control");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            page_title_component_1.PageTitleComponent,
            task_creator_component_1.TaskCreatorComponent,
            task_list_component_1.TaskListComponent,
            task_item_component_1.TaskItemComponent,
            user_component_1.UserComponent,
            capitalize_pipe_1.CapitalizePipe,
            search_pipe_1.SearchPipe,
            filter_pipe_1.FilterPipe,
            modal_directive_1.ModalComponent,
            custom_counterComponent_1.CustomCounterComponent,
            numeric_control_1.NumericComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            forms_2.FormsModule,
            http_1.HttpModule
        ],
        providers: [task_service_1.TaskService, modal_service_1.ModalService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map