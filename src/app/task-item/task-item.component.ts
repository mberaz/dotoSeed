import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../task';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() counter: number;
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }
  isDoneStatusChanged(task: Task): void {
    task.IsDone = !task.IsDone;
    this.taskService.updateTask(task);
  }

}
