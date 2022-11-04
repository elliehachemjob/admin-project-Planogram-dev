import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
//Here  we will intercept the request and added the bearer token for each request


export class JwtTokenInterceptor implements HttpInterceptor {
  //We added here injector to prevent infinite injection dependency loop
  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //  let authService = this.injector.get(AuthService)

    //Token usually is after the Bearer and space 
    // Here it is is xx.yy.zz
    let tokenizedReq = request.clone({
      setHeaders: {
        Authorization: "Bearer xx.yy.zz"
      }
    });

    return next.handle(tokenizedReq);
  }
}
