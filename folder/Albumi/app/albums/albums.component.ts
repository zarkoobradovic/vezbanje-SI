import { Component, OnInit } from '@angular/core';
import {Album} from '../models/album';
import {AlbumsService} from '../albums.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  ListAlbums?:Album[];
  constructor(private service:AlbumsService) { }

  ngOnInit(): void {
    this.getAllAlbums();
  }

  getAllAlbums(){
    this.service.getAllAlbums().subscribe(item=>{
      this.ListAlbums = item;
    });
  }

}
