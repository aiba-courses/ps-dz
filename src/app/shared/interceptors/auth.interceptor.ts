import { inject } from '@angular/core';
import { AuthStoreService } from '../services/authStore.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authStore = inject(AuthStoreService);
  const isAuthenticated = authService.isAuthenticated$.getValue();

  if (!isAuthenticated) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `${authStore.getValue('tokenType')} ${authStore.getValue('accessToken')}`
    }
  });

  return next(authReq);
};
