import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataGroup } from '../../models/dataGroup';

const API_URL = 'http://localhost:8080/connection';

@Injectable({providedIn:'root'})
export class ConnectionService {
    
    constructor(private http: HttpClient) {}
    
    listConnections() {  
        return this.http
            .get<DataGroup>(API_URL);   
    }

    listConnectionsBySwitch(id) {
        return this.http
            .get<DataGroup>(`${API_URL}/switch/${id}`);
    }

    getAvailablePorts(id) {
        return this.http
            .get<String[]>(`${API_URL}/switch/availablePorts/${id}`);
    }

    deleteConnection(id) {
        return this.http
            .delete(`${API_URL}/delete/${id}`);
    }
}