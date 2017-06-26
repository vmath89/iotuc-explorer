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
      console.log(this.industryObj);

      this.tiles = [
          {cols: 1, rows: 2, color: 'lightblue', header: 'Header1', footer: 'Footer1'},
          {cols: 1, rows: 2, color: 'lightblue', header: 'Header2', footer: 'Footer2'},
          {cols: 1, rows: 2, color: 'lightblue', header: 'Header3', footer: 'Footer3'},
          {cols: 1, rows: 2, color: 'lightblue', header: 'Header4', footer: 'Footer4'},
          {cols: 1, rows: 2, color: 'lightblue', header: 'Header4', footer: 'Footer4'},
      ];

      for(var i = 0; i < this.industryObj.length; i++){
          this.tiles[i].text = this.industryObj[i].name;
          this.tiles[i].header = this.industryObj[i].description;
          this.tiles[i].footer = this.industryObj[i].description;
      }
  }


  ngOnInit() {
      this.industryService.getIndustries().subscribe(res =>{
          this.industryObj = res.json()
          this.fillTiles();
      });

  }

  onIndustryClick(industry: String): void {
    this.selectedIndustry = industry;
    console.log(industry);
    this.router.navigate(['/usecases', this.selectedIndustry]);
  }
}
