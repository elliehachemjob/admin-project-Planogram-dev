import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  isLogoActive = new BehaviorSubject(false);
  isLogo1Active = new BehaviorSubject(false);
  isLogo2Active = new BehaviorSubject(false);
  isLogo3Active = new BehaviorSubject(false);


  constructor() { }


  setLogoActivation(logoNumber: any) {

    if (logoNumber === 1) {
      console.log("here 1")
      this.isLogo1Active.next(true);
      this.isLogo2Active.next(false);
      this.isLogo3Active.next(true)
    }
    if (logoNumber === 2) {
      console.log("here 2")

      this.isLogo1Active.next(false);
      this.isLogo2Active.next(true);
      this.isLogo3Active.next(false)
    }
    if (logoNumber === 3) {
      console.log("here 3")

      this.isLogo1Active.next(false);
      this.isLogo2Active.next(false);
      this.isLogo3Active.next(true)
    }

  }


}
