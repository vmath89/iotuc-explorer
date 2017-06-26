import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndustryService } from '../../services/industry/industry.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
    providers: [IndustryService]
})
export class DashboardComponent implements OnInit {

    public selectedIndustry: any;
    public industryObj: any;
    public tiles: any;

  constructor(
      private router: Router,
      private industryService: IndustryService
  ) { }

  public fillTiles(): void {
      console.log(this.industryObj.length);
      this.tiles = [
          {text: 'One', cols: 1, rows: 2, color: 'lightblue', header: 'Header1', footer: 'Footer1'},
          {text: 'Two', cols: 1, rows: 2, color: 'lightblue', header: 'Header2', footer: 'Footer2'},
          {text: 'Three', cols: 1, rows: 2, color: 'lightblue', header: 'Header3', footer: 'Footer3'},
          {text: 'Four', cols: 1, rows: 2, color: 'lightblue', header: 'Header4', footer: 'Footer4'},
      ];
  }


  ngOnInit() {
      this.industryService.getIndustries().subscribe(res =>{
          this.industryObj = res.json()
          this.industryObj = JSON.stringify(this.industryObj);
          console.log(this.industryObj);
          this.fillTiles();
      });

  }

  onIndustryClick(industry: String): void {
    this.selectedIndustry = industry;
    console.log(industry);
    this.router.navigate(['/usecases', this.selectedIndustry]);
  }
}
