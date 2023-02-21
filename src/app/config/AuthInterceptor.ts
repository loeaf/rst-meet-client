import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  jwt: string = '';
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.includes("login")) {
      return next.handle(request);
    } else {
      return next.handle(this.addAuthToken(request));
    }
  }

  addAuthToken(request: HttpRequest<any>) {
    let Authorization = window.localStorage.getItem('token');
    Authorization = `Bearer ${Authorization}`;
    return request.clone({
      setHeaders: {
        Authorization: Authorization
      }
    })
  }
  async setToken (token: string) {
    this.jwt = token;
  }
}
