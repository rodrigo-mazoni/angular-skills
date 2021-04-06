import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;

  constructor(private httpClient: HttpClient,private spinner: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinner.show()
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
      this.cards = ret;
      this.spinner.hide()
    });
  }

}
