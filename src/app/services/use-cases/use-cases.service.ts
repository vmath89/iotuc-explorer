import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UseCasesService {

    public useCase: any;

    constructor(private http: Http) {
    }

    public getUseCases(industry: string): any {
        let url: string = "http://localhost:8080/iot/usecases?industry=" + industry;
        return (this.http.get(url));
    }

    public getUseCaseDetails(id: number) {
        let url: string = "http://localhost:8080/iot/usecases/" + id;
        return (this.http.get(url));
    }
}
