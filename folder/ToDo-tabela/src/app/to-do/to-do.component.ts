import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../model/ToDo';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private service: ToDoService) { }
  ToDoList?: ToDo[];

  ngOnInit(): void {
    this.getToDoList();
  }
  getToDoList() {
    this.service.getAllToDo().subscribe(item => {
      this.ToDoList = item
    });
  }

  NotCompleted() {
    //this.getToDoList();
  //  this.ToDoList = 
    //this.ToDoList = this.ToDoList?.filter(t => t.completed == false);
    this.service.getAllToDo().subscribe(item => {
      this.ToDoList = item.filter(t => t.completed == false)
    });
    console.log(this.ToDoList);
  }
  Completed() {
   // this.getToDoList();
    /*this.ToDoList = this.ToDoList?.filter(t => t.completed == true);
    console.log(this.ToDoList);*/
    this.service.getAllToDo().subscribe(item => {
      this.ToDoList = item.filter(t => t.completed == !false)
    });
  }
}
