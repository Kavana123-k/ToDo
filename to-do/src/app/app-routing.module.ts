import { TaskListComponent } from './to-do/task-list/task-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'to-do', component: ToDoComponent },
  { path: 'parent/child', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
