import {Component, OnInit, Input} from '@angular/core';
import { UseCasesService } from '../../services/use-cases/use-cases.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-use-cases-details',
  templateUrl: './use-cases-details.component.html',
  styleUrls: ['./use-cases-details.component.css'],
  providers: [UseCasesService]
})
export class UseCasesDetailsComponent implements OnInit {

  id: number;
  useCase: any;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private useCasesService: UseCasesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.useCasesService.getUseCaseDetails(this.id).subscribe(res => {
      this.useCase = res.json();
    });
  }

  goBack(){
    window.history.back();
  }
}
