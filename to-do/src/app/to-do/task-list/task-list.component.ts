import { ToDoComponent } from './../to-do.component';
import { Component, Input, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 

  @Input() task_list:any  ;
   
   

  constructor() { }

  ngOnInit(): void {

  }
 
 

}
