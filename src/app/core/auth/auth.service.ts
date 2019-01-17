import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  authenticate(login: string, senha: string) {

    return this.http
       .post(
         `${API}/login`, 
         { login, senha },
         { observe : 'response' })
       .pipe(tap(res => {
          const authToken = res.headers.get('x-access-token');
          this.tokenService.setToken(authToken);  
       }));
  }
}
