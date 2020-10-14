import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //forms class vars
  fc_login = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form): void {
    if (form.value.email && form.value.password) {
      this.authService.login(form.value).subscribe(
        (res) => {
          this.router.navigateByUrl('/auth');
        },
        (error) => {
          // console.log(error.error.message);
          this.fc_login = true;
        }
      );
    } else {
      this.fc_login = true;
    }
  }
}
