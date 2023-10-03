import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user: User | null) => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: req.params.set('auth', user.token || ''),
        });
        return next.handle(modifiedReq);
      })
    );
    return next.handle(req);
  }
}
