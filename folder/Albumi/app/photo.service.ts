import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './models/photo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getAbumsPhotoById(id:number):Observable<Photo[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?albumId='+id);
  }
}
