import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { pipe } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  userName: string;
  subscription: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }
  reloadTest() {
    this.userName = localStorage.getItem('User');
  }
  getUsers() {
    this.userName = localStorage.getItem('User');
  }
  logout() {
    this.authService.logout();
    this.userName = null;
  }

  //nav buttons functions
  homeButton() {
    this.router.navigate(['auth/']);
  }
  loginButton() {
    this.router.navigate(['auth/login']);
  }
  registerButton() {
    this.router.navigate(['auth/register']);
  }
}
