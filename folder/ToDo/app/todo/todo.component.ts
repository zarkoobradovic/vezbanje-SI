import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../Model/ToDo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoService) { }

  ListToDo?: ToDo[];

  ngOnInit():void {
    this.service.getAllToDO().subscribe(data => {
      this.ListToDo = data;
    });
  }


}
