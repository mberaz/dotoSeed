import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {
  isDone: boolean = true;
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  handleEnter(taskName: string): void {
    this.taskService.createNewTask(taskName);
  }

  toggleAll() {
    this.taskService.toggleAllTask(this.isDone);
    this.isDone = !this.isDone;
  }
}
