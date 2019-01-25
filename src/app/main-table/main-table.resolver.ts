import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataGroup } from '../models/dataGroup';
import { ConnectionService } from '../core/services/connection.service';

@Injectable({ providedIn : 'root' })
export class MainTableResolver implements Resolve<Observable<DataGroup>> {

    constructor(
        private connectionService: ConnectionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<DataGroup> {

        return this.connectionService.listConnections(); 
    }
} 