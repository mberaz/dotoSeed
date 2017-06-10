import { Task } from './../task';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(taskList: Task[], predicate: any, val: any): any {
    // var args = [].slice.call(arguments);
    // var last = args.filter(function (item: any, index: number, t: any[]) {
    //   return index > 1;
    // });

    return taskList.filter((task) => predicate(task, val));
  }
}