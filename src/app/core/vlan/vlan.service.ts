import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vlan } from 'src/app/models/vlan';

const API_URL = 'http://localhost:8080/vlan';

@Injectable({ providedIn: 'root'})
export class VlanService {

    constructor(private http: HttpClient) {}

    getVlans() {

        return this.http.get<Vlan[]>(API_URL);
    }
}