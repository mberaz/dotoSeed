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
var task_1 = require("./task");
var taskList = [
    new task_1.Task(1, 'buy milk', false),
    new task_1.Task(2, 'buy eggs', false),
    new task_1.Task(3, 'play COD', false),
    new task_1.Task(4, 'play Prey', true),
    new task_1.Task(5, 'learn angular', false),
    new task_1.Task(6, 'chill', false),
    new task_1.Task(7, 'read a book', false),
    new task_1.Task(8, 'random stuff', true)
];
var TaskService = (function () {
    function TaskService() {
        this.newTaskMessage = new core_1.EventEmitter();
        this.updatedTaskMesage = new core_1.EventEmitter();
    }
    // New Task
    TaskService.prototype.createNewTask = function (taskName) {
        var task = new task_1.Task(taskList.length + 1, taskName, false);
        this.addNewTaskToList(task);
        this.newTaskMessage.next(task);
    };
    TaskService.prototype.subscribeOnNewTask = function (callback) {
        this.newTaskMessage.subscribe(callback);
    };
    TaskService.prototype.addNewTaskToList = function (task) {
        taskList.push(task);
    };
    // End New Task
    // update task
    TaskService.prototype.updateTask = function (task) {
        var listTask = taskList.find(function (t) { return t.Id === task.Id; });
        listTask.Name = task.Name;
        listTask.IsDone = task.IsDone;
        this.updatedTaskMesage.next(listTask);
    };
    TaskService.prototype.subscribeOnUpdatedTask = function (callback) {
        this.updatedTaskMesage.subscribe(callback);
    };
    // End update Task
    TaskService.prototype.toggleAllTask = function (isDone) {
        for (var i = 0; i < taskList.length; i++) {
            var innerTask = taskList[i];
            innerTask.IsDone = isDone;
            this.updatedTaskMesage.next(innerTask);
        }
    };
    TaskService.prototype.getTaskList = function () {
        return taskList;
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map