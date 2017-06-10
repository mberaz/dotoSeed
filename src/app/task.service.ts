import { Injectable, EventEmitter } from '@angular/core';
import { Task } from './task';
let taskList: Task[] = [
  new Task(1, 'buy milk', false),
  new Task(2, 'buy eggs', false),
  new Task(3, 'play COD', false),
  new Task(4, 'play Prey', true),
  new Task(5, 'learn angular', false),
  new Task(6, 'chill', false),
  new Task(7, 'read a book', false),
  new Task(8, 'random stuff', true)];

@Injectable()
export class TaskService {

  newTaskMessage = new EventEmitter<Task>();
  updatedTaskMesage = new EventEmitter<Task>();
  constructor() { }

  // New Task
  createNewTask(taskName: string) {
    let task = new Task(taskList.length + 1, taskName, false);
    this.addNewTaskToList(task);
    this.newTaskMessage.next(task);
  }

  subscribeOnNewTask(callback: Function) {
    this.newTaskMessage.subscribe(callback);
  }

  addNewTaskToList(task: Task) {
    taskList.push(task);
  }
  // End New Task

  // update task
  updateTask(task: Task) {
    let listTask = taskList.find((t) => t.Id === task.Id);
    listTask.Name = task.Name;
    listTask.IsDone = task.IsDone;
    this.updatedTaskMesage.next(listTask);
  }

  subscribeOnUpdatedTask(callback: Function) {
    this.updatedTaskMesage.subscribe(callback);
  }

  // End update Task
  toggleAllTask(isDone:boolean) {
    for (let i = 0; i < taskList.length; i++) {
      let innerTask = taskList[i];
      innerTask.IsDone = isDone;
      this.updatedTaskMesage.next(innerTask);
    }
  }

  getTaskList(): Task[] {
    return taskList;
  }

}
