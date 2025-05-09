import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {TokenService} from '../services/token.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const _tokenService = inject(TokenService);
  const token = _tokenService.getToken();

    if (req.url.includes('login') || req.url.includes('register')) {
      return next(req);
    }

    if (token) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedReq);
    }

    return next(req);
}
