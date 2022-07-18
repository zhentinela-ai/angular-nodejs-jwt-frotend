import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private autoServices: AuthService,
    ) { }

  intercept(req:  HttpRequest<any>, next: HttpHandler) {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.autoServices.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }
}
