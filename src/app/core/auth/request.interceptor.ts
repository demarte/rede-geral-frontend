import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from '../services/token.service';
import { UserService } from '../services/user/user.service';


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
                        if(err instanceof HttpErrorResponse && err.status === 403)
                            this.userService.logout();
                            this.router.navigate(['home']);
                            return throwError(err); 
                        
                        }))
                        .pipe(catchError(err => {
                            
                            if(err instanceof HttpErrorResponse && err.status === 0) {
                                this.userService.logout();
                                this.router.navigate(['error']);
                                return throwError(err);
                            }
                    }));           
        }

}