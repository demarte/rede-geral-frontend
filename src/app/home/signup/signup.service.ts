import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

const API_URL = 'http://localhost:8080'

@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {

        return this.http.get(`${API_URL}/user/exists/${userName}`);
    }

    signup(newUser: User) {
    
        return this.http.post(`${API_URL}/user`, newUser);
    }
}