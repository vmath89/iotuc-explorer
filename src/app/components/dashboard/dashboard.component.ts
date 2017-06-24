import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    selectedIndustry;

  constructor(private router: Router) { }

  tiles = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue', header: 'Header1', footer: 'Footer1'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightblue', header: 'Header2', footer: 'Footer2'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightblue', header: 'Header3', footer: 'Footer3'},
    {text: 'Four', cols: 1, rows: 2, color: 'lightblue', header: 'Header4', footer: 'Footer4'},
  ];

  ngOnInit() {
  }

  onIndustryClick(industry: String): void {
    this.selectedIndustry = industry;
    console.log(industry);
    this.router.navigate(['/industry', this.selectedIndustry]);
  }
}
