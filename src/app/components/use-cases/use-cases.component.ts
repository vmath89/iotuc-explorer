import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UseCasesService} from '../../services/use-cases/use-cases.service'

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-use-cases',
    templateUrl: './use-cases.component.html',
    styleUrls: ['./use-cases.component.css'],
    providers: [UseCasesService]
})
export class UseCasesComponent implements OnInit {

    industryId: Number;
    useCases: any;
    public selectedUseCase: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private useCasesService: UseCasesService) {
    }

    ngOnInit() {
        this.industryId = this.route.snapshot.params['industry'];
        this.useCasesService.getUseCases(this.industryId).subscribe(res => {
            this.useCases = res.json()
        });
    }

    details(useCase: any): void {
        this.selectedUseCase = useCase;
        this.router.navigate(['/details', this.selectedUseCase.id]);
        console.log(this.useCases[0])
    }
    goBack(){
        window.history.back();
    }
}
