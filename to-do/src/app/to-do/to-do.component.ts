import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

    public toDoList : string[] = [];

    public task:any;
    public index:any;
    
    completed: boolean = false;


    addTask(){
      if (this.task == '' || this.task ==undefined) {
      }
      else {
          this.toDoList.push(this.task);
          this.task = '';
      }
    }
    deleteTask(index:any){
      this.toDoList.splice(index, 1);
    }

    onChange(){
        this.completed = !this.completed;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
