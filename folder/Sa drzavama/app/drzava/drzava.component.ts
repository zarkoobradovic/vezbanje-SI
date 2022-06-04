import { Component, OnInit } from '@angular/core';
import { DrzavaService } from '../drzava.service';
import { Drzava } from '../models/drzava';
@Component({
  selector: 'app-drzava',
  templateUrl: './drzava.component.html',
  styleUrls: ['./drzava.component.css']
})
export class DrzavaComponent implements OnInit {

  ListDrzave?: Drzava[];
  constructor(private service: DrzavaService) { }

  ngOnInit(): void {
    this.service.getAllDrzave().subscribe(item => {
      this.ListDrzave = item;
    });
  }
  funEvropa() {
    this.service.getAllDrzave().subscribe(item=>{
      this.ListDrzave = item.filter(t=>t.region=='Europe');
    });
  }
  funAzija() {
    this.service.getAllDrzave().subscribe(item=>{
      this.ListDrzave = item.filter(t => t.region=='Asia');
    }); 
  }
  funAmerika() {
    this.service.getAllDrzave().subscribe(item=>{
      this.ListDrzave = item.filter(t=>t.region=='Americas');
    });
  }
}
