import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

 
import { AuthService } from '../../services/auth/auth.service';
//let myObj = { name: 'Nixon', profession: 'Developer' };
//localStorage.setItem(key, JSON.stringify(myObj));
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  userName: string = null;

  constructor(private authService:AuthService,private dataService: DataService, private router: Router, ) {}

  ngOnInit() {
    this.dataService.userName$.subscribe((texto) => {
      this.userName = texto;
    });
    this.getUsers()
  }
 
  getUsers() {
    this.userName = sessionStorage.getItem('User');
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
