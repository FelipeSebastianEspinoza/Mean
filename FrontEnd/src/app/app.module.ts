import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './pageComponents/navbar/navbar.component';
import { ImageContainerComponent } from './image-container/image-container.component';

//externals
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, UsersComponent, NavbarComponent, ImageContainerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgxSpinnerModule,BrowserAnimationsModule],
 
providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
