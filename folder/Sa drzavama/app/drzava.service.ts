import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drzava } from './models/drzava';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrzavaService {

  constructor(private http:HttpClient) { }

  getAllDrzave():Observable<Drzava[]>{
    return this.http.get<Drzava[]>('https://restcountries.com/v2/all?fields=name,capital,population,area,flag,region');
  }
}
