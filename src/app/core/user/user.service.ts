import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token/token.service';
import * as jwt_decode from 'jwt-decode';
import { User } from './user';

@Injectable({ providedIn : 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService) {

        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    logout() {
        this.tokenService.deleteToken();
        this.userSubject.next(null);
    }

    isLoggedIn() {
        return this.tokenService.hasToken();
    }

    private decodeAndNotify() {
        
        const token = this.tokenService.getToken();
        if(token) {
            const user = jwt_decode(token) as User;
            this.userSubject.next(user);       
        }
    }
}