import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn : 'root' })
export class TokenService {

    hasToken() {

       return this.getToken() === null;
      
    }

    getToken() {

        window.localStorage.getItem(KEY);
    }

    setToken(token) {

        window.localStorage.setItem(KEY, token);
    }

    deleteToken() {

        window.localStorage.removeItem(KEY);
    }
}