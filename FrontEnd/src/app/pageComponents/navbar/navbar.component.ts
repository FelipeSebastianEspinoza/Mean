import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService],
})
export class NavbarComponent implements OnInit {
  //userName: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
    //  this.userName = localStorage.getItem('User');
 //     this.authService.logout();
  }
  
}
