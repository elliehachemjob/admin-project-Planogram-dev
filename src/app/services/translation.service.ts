import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  isRtl = new BehaviorSubject(false);

  constructor() { }
  translatePage() {

  }

  getIsRtl() {
    return this.isRtl;
  }

  setIsRtl(data: any) {
    this.isRtl.next(data);
  }
}
