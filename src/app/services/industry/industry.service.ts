import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IndustryService {

  constructor(private http: Http) { }

  public getIndustries(): any {
    let url: string = "http://localhost:8080/iot/industries";
    return(this.http.get(url));
  }
}
