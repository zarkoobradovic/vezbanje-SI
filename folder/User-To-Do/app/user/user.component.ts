import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ListUser?:User[];
  constructor(private service:UserService,) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(item=>{
      this.ListUser = item;
    });
  }


  

}
