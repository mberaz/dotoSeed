import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Task } from './../task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[];
  numberOfNotDone: number;
  searchParam = "";
  constructor(public taskService: TaskService) { }

  ngOnInit() {
    let self = this;
    this.taskList = this.taskService.getTaskList();
    this.updateNumberOfNotDone();

    this.taskService.subscribeOnNewTask((newTask: Task) => {
      self.updateNumberOfNotDone();
    });

    this.taskService.subscribeOnUpdatedTask((task: Task) => {
      self.updateNumberOfNotDone();
    });
  }

  updateNumberOfNotDone() {
    this.numberOfNotDone = this.taskList.filter((item) => !item.IsDone).length;
  }
  handleKeyup(newVal: string): void {
    this.searchParam = newVal;
  }

  predicate(task: Task, str:string) {
    return task.Name.startsWith(str);
  }
}
