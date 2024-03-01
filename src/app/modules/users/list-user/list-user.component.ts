import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  users : any []=[]

  constructor (public userService :UserService, public router : Router)
  {}
  ngOnInit(): void {
    this.users=this.userService.users
}



  deleteUserList(){}

}
