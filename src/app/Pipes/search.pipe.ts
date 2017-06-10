import { Task } from './../task';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  transform(taskList: Task[], param:string): any {
    if (param.length===0){
        return taskList;
    }

   return taskList.filter((task)=>task.Name.startsWith(param));
  }
}