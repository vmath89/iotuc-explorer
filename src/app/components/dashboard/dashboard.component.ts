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

    public selectedIndustryId: Number;
    public industryObj: any;
    public tiles: any;

  constructor(
      private router: Router,
      private industryService: IndustryService
  ) {}

  public fillTiles(): void {

      this.tiles = [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
      ];

      for(var i = 0; i < this.industryObj.length; i++){
          this.tiles[i].text = this.industryObj[i].name;
          this.tiles[i].id = this.industryObj[i].id;
          this.tiles[i].cols = 1;
          this.tiles[i].rows = 2;
          this.tiles[i].color = 'lightblue';

      }
  }


  ngOnInit() {
      this.industryService.getIndustries().subscribe(res =>{
          this.industryObj = res.json()
          this.fillTiles();
      });

  }

  onIndustryClick(id: Number): void {
    this.selectedIndustryId = id;
    this.router.navigate(['/usecases', this.selectedIndustryId]);
  }
}
