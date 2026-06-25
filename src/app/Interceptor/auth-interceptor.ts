import { HttpInterceptorFn } from '@angular/common/http';
import {Loader} from '../services/loader'
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
debugger;
  //  const modifiedReq = req.clone({
  //   setHeaders: {
  //     Authorization: 'Bearer my-token'
  //   }
  // });
  // return next(req);

   const loaderService = inject(Loader);

  // Show spinner
  loaderService.show();

  return next(req).pipe(

    finalize(() => {

      // Hide spinner
      loaderService.hide();

    })

  );
};
