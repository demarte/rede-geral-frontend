import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(login: string, senha: string) {

    return this.http.post(`${API}/login`, { login, senha });
  }
}
