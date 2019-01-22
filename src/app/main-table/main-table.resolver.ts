import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ConnectionService } from './services/connection.service';
import { DataGroup } from '../models/dataGroup';

@Injectable({ providedIn : 'root' })
export class MainTableResolver implements Resolve<Observable<DataGroup>> {

    constructor(
        private connectionService: ConnectionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<DataGroup> {

        const id = route.params.id;
 
        if(!id) {
            return this.connectionService.listConnections();
        }
       else {
           return this.connectionService.listConnectionsBySwitch(id);     
        }
    }
} 