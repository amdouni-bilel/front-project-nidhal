import { Component } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {

  users : any []=[]

  constructor (public userService :UserService, public router : Router)
  {}
  ngOnInit(): void {
    this.users=this.userService.users
  }



  deleteUserList(){}

}
