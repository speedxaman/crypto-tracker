import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(error => {
      console.error('API Error:', error);
      
      // You can add global error handling here
      // For example, show a toast notification
      
      return throwError(() => error);
    })
  );
};