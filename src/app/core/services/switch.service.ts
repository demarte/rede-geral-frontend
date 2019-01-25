import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Switch } from 'src/app/models/switch';

const API_URL = 'http://localhost:8080/switch'

@Injectable({ providedIn: 'root'})
export class SwitchService {

    constructor(private http: HttpClient) {}

    getSwitchs() {
        return this.http.get<Switch[]>(API_URL);
    }

}