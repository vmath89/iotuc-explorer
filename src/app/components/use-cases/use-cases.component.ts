import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit {

    industryName: String;

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
    this.industryName = this.route.snapshot.params['industry'];
    console.log(this.industryName);

  }

}
