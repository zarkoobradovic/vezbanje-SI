import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoComment } from 'typescript';
import { ToDo } from '../models/todo';
import { ToDoService } from '../to-do.service';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  ListToDoUser?:ToDo[];
  constructor(private serice:ToDoService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('userId'));
    this.getUsetToDoById(id);
  }

  getUsetToDoById(id:number){
  this.serice.getToDoUserById(id).subscribe(item=>{
    this.ListToDoUser = item;
  });

  }

}
