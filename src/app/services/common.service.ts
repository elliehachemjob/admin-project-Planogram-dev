import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  country = new BehaviorSubject("lebanon");

  constructor() { }

  getCountry() {
    return this.country;
  }

  seCountry(data: any) {
    this.country.next(data);
  }

}
