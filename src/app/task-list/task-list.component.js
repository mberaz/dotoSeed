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
var task_service_1 = require("./../task.service");
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
        this.searchParam = "";
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var self = this;
        this.taskList = this.taskService.getTaskList();
        this.updateNumberOfNotDone();
        this.taskService.subscribeOnNewTask(function (newTask) {
            self.updateNumberOfNotDone();
        });
        this.taskService.subscribeOnUpdatedTask(function (task) {
            self.updateNumberOfNotDone();
        });
    };
    TaskListComponent.prototype.updateNumberOfNotDone = function () {
        this.numberOfNotDone = this.taskList.filter(function (item) { return !item.IsDone; }).length;
    };
    TaskListComponent.prototype.handleKeyup = function (newVal) {
        this.searchParam = newVal;
    };
    TaskListComponent.prototype.predicate = function (task, str) {
        return task.Name.startsWith(str);
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    core_1.Component({
        selector: 'app-task-list',
        templateUrl: './task-list.component.html',
        styleUrls: ['./task-list.component.css']
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map