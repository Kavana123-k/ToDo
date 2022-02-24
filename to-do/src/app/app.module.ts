// import { ToDoService } from './service/to-do.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TaskListComponent } from './to-do/task-list/task-list.component';
import { RemainTaskListComponent } from './to-do/remain-task-list/remain-task-list.component';
import { CompletedTaskComponent } from './to-do/completed-task/completed-task.component';
import { TodoV2Component } from './to-do/todo-v2/todo-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TaskListComponent,
    RemainTaskListComponent,
    CompletedTaskComponent,
    TodoV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
