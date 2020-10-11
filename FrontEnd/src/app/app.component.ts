import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  constructor(private spinner: NgxSpinnerService,private dataService:DataService) {}
 
  ngOnInit() {
 
    /**  
    this.spinner.show();
 
    setTimeout(() => {
     
      this.spinner.hide();
    }, 1000);   */
  }
}
