import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataGroup } from '../../models/dataGroup';

const API = 'http://localhost:8080';

@Injectable({providedIn:'root'})
export class ConnectionService {
    
    constructor(private http: HttpClient) {}
    
    listConnections() {  
        return this.http
        .get<DataGroup>(`${API}/connection`);   
    }

    listConnectionsBySwitch(id) {
        return this.http
        .get<DataGroup>(`${API}/connection/switch/${id}`);
    }

    deleteConnection(id) {
        return this.http
        .get(`${API}/connection/delete/${id}`);
    }
}