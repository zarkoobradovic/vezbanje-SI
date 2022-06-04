import { Injectable } from '@angular/core';
import { ToDo } from './models/todo';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http:HttpClient) { }

  getToDoUserById(userId:number):Observable<ToDo[]>{
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?userId='+userId);
  }
}
