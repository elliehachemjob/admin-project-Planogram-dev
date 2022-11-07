import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ISO6391 from 'iso-639-1';

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

  getAndSetLanguage(langSelected: any) {
    langSelected = localStorage.getItem("language");
    if (langSelected === null || undefined) langSelected = ISO6391.getName(window.navigator.language.substring(0, 2));
    else if (langSelected === null || undefined) langSelected = "english";
    return langSelected.toLowerCase();
  }

}
