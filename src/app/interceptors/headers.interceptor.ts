import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('from intercept',request);

    const myRequest = request.clone({
    setHeaders: {
      'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
      'X-RapidAPI-Host' :'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  })
  return next.handle(myRequest);

    // const apiKey= 'Testkey';
    // const myRequest = request.clone({
    //   setHeaders: {
    //     'api-key': apiKey
    //   }
    // })
    // return next.handle(myRequest);
  }
}
