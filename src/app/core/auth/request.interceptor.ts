import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

import { TokenService } from '../token/token.service';
import { catchError } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(
        private tokenService: TokenService,
        private userService: UserService,
        private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {

            if(this.tokenService.hasToken()) {
                const token = this.tokenService.getToken();
                req = req.clone({
                    setHeaders : {
                        'Authorization' : `Bearer ${token}`
                    }
                });
            }
            return next
                .handle(req)
                    .pipe(catchError(err => {
                        if (err instanceof HttpErrorResponse && err.status === 403)
                            this.userService.logout();
                            this.router.navigate(['home']);
                            return throwError(err);    
                    }))
                
        }

}