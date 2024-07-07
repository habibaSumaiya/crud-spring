import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {
  users: any = [] ;

 
 constructor(private userservice: UserService) { }

 ngOnInit() {
  this.getAllUsers();
}

getAllUsers() {
  this.userservice.getAll().subscribe((data) => {
    console.log(data)
    this.users = data
  })
}


delete(id: number) {
  this.userservice.delete(id).subscribe((data) => {
    console.log(data)
    this.getAllUsers();
  })
}

  


}

