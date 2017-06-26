import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IndustryService {

  constructor(private http: Http) { }

  public getIndustries(): any {
    let testUrl: string = "https://restcountries.eu/rest/v2/all";
    let url: string = "http://localhost:8080/iot/industries";
    let getRequest: any = this.http.get(url);
    console.log(getRequest);
    return(getRequest);
  }
}
