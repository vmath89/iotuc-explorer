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

    industryName: string;
    useCases: any;
    public selectedUseCase: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private useCasesService: UseCasesService) {
    }

    ngOnInit() {
        this.industryName = this.route.snapshot.params['industry'];
        this.useCasesService.getUseCases(this.industryName).subscribe(res => {
            this.useCases = res.json()
        });
    }

    details(useCase: any): void {
        this.selectedUseCase = useCase;
        console.log(this.selectedUseCase);
        this.router.navigate(['/details', this.selectedUseCase.id]);
    }
    goBack(){
        window.history.back();
    }
}
