import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from '../auth/auth-routing-module';
import { RegisterComponent } from '../users/register/register.component';
import { LoginComponent } from '../users/login/login.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]

})
export class AuthModule { }