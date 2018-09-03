
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = new HttpHeaders({
            // 'access-control-expose-headers': 'x-total-count',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Cache-Control': 'no-cache, no-store, must-revalidate',
            // 'Pragma': 'no-cache',
            // 'Expires': '0',
        });

        const newRequest = req.clone({
            headers,

        })
        console.warn('INTERCEPTOR ', newRequest);
        // console.log(newRequest.body);

        return next.handle(newRequest);
    }
}