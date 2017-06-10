import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from './task.service';

import { UserComponent } from './users/user.component';

import { CapitalizePipe } from './Pipes/capitalize.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { FilterPipe } from './Pipes/filter.pipe';

import { ModalComponent } from './modal/modal.directive ';
import { ModalService } from './modal/modal.service';

import { CustomCounterComponent } from './custom-counter/custom-counterComponent';
import {NumericComponent} from'./numericControl/numeric.control';


@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    TaskCreatorComponent,
    TaskListComponent,
    TaskItemComponent,
    UserComponent,
    CapitalizePipe,
    SearchPipe,
    FilterPipe,
    ModalComponent,
    CustomCounterComponent,
    NumericComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
