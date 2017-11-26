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
    public text: any

  constructor(
      private router: Router,
      private industryService: IndustryService
) {}

  public fillTiles(): void {

      this.tiles = new Array();

      for(var i = 0; i < this.industryObj.length; i++){
          this.tiles.push({})
          this.tiles[i].text = this.industryObj[i].name;
          this.tiles[i].id = this.industryObj[i].id;
          this.tiles[i].cols = 1;
          this.tiles[i].rows = 2;
          this.tiles[i].color = 'lightblue';
          this.tiles[i].words = this.tiles[i].text.split(" ");
          //console.log(this.tiles[i].words);
          //this.tiles[i].text = this.tiles[i].words
          // console.log(this.tiles[i].words.length);
          // this.text = '';
          //  for(var j = 0; j < this.tiles[i].words.length; j++){
          //      this.text += this.tiles[i].words[j];
          //      console.log(this.tiles[i].words[j].word)
          //  }
          // this.tiles[i].text = this.text;

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
