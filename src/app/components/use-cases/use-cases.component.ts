import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UseCasesService } from '../../services/use-cases/use-cases.service'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css'],
  providers: [UseCasesService]
})
export class UseCasesComponent implements OnInit {

    industryName: string;
    useCases: any;

  constructor(
      private route: ActivatedRoute,
      private useCasesService: UseCasesService
  ) {}

  ngOnInit() {
    this.industryName = this.route.snapshot.params['industry'];
    console.log(this.industryName);
      this.useCasesService.getUseCases(this.industryName).subscribe(res =>{
          this.useCases = res.json()
      });

  }

}
