import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../service/user.service';
import { User } from '../service/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  postUser(form: NgForm) {
    if (form.value._id) {
      this.userService.putUsers(form.value).subscribe((res) => {
        this.getUsers();
        this.userService.selectedUser = new User();
      });
    } else {
      this.userService.postUsers(form.value).subscribe((res) => {
        this.getUsers();
        this.userService.selectedUser = new User();
      });
    }
  }
  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string) {
    this.userService.deleteUser(_id).subscribe((res) => {
      this.getUsers();
      this.userService.selectedUser = new User();
    });
  }
  navegarHaciaPosts() {
    this.router.navigate(['/posts']);
  }
}
