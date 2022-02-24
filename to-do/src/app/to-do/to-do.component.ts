// import { ToDoService } from './../service/to-do.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

type Todo = { name: string; done: boolean };

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  // providers: [ToDoService],
})
export class ToDoComponent implements OnInit {
   toDoList: Todo[] = [];

   task= '';
  //public index: any;

  // completed: boolean = false;

  addTask() {
    if (this.task == '' || this.task == undefined) {
    } else {
      this.toDoList.push({name:this.task,done:false});
      this.task = '';
    }
  }

  completedTask() {}

  deleteTask(index: any) {
    this.toDoList.splice(index, 1);
  }

  onChange(todo:Todo) {
    todo.done = !todo.done;
   }

  
  ngOnInit(): void {}
}

//3 tabs - 1.all task,2.remaining task, 3.task r finished
