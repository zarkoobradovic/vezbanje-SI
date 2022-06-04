import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToDo } from '../models/todo';
import { ToDoService } from '../to-do.service';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  ListToDo?: ToDo[];
  constructor(private service: ToDoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("userId");
    this.getToDoByUser(Number(id));
  }

  getToDoByUser(userId: number) {
    this.service.getToDoByUnserId(userId).subscribe(item => {
      this.ListToDo = item;
    });
  }

}
