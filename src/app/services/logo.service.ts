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

  payloadApiTest(): Observable<any> {
    //Write code calling service to obtain food fact data
    let url = `https://demo.payloadcms.com/api/posts/63512a3220f2c83732faa738?draft=true`;
    return this.http.get(url);
  }
}
