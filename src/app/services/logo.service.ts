import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  constructor(private http: HttpClient) { }
  setLogoActivation(logoNumber: any) {
  }
}
