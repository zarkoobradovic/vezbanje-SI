import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToDo} from './model/ToDo'
@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http:HttpClient) { }

  getAllToDo():Observable<ToDo[]>{
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}
