import { Component, OnInit } from '@angular/core';

type Todo = { name: string; done: boolean };

@Component({
  selector: 'app-todo-v2',
  templateUrl: './todo-v2.component.html',
  styleUrls: ['./todo-v2.component.css'],
})
export class TodoV2Component implements OnInit {
  todoList: Todo[] = [];
  todoName = '';

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(index:any) {
    // this.todoList = this.todoList.filter((t) => t.name !== todo.name);
    this.todoList.splice(index, 1);
  }

  addTodo() {
    this.todoList.push({ name: this.todoName, done: false });
    this.todoName='';
  }

  markasDone(todo: Todo) {
    todo.done = !todo.done;
  }
  
}
