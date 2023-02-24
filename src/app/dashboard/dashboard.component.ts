import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private clipboard: Clipboard) { }
  ngOnInit(): void {
  }


  copyLink() {
    this.clipboard.copy('https://rel.link/k4lkyk');
  }


}
