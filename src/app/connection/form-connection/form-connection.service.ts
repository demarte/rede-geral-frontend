import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:8080/connection'

@Injectable({
    providedIn : 'root'
})
export class FormConnectionService{

    constructor(private http: HttpClient) {}

    checkIpTaken(ip: string) {

        return this.http.get(`${API_URL}/exists/${ip}`);
    }

    saveConnection(data) {

        return this.http.post(API_URL, data);
    }

}