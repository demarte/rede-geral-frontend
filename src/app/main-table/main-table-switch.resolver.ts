import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataGroup } from '../models/dataGroup';
import { ConnectionService } from '../core/services/connection.service';

@Injectable({providedIn: 'root'})
export class MainTableSwitchResolver implements Resolve<Observable<DataGroup>>{

    constructor(private connectionService: ConnectionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<DataGroup> {

        const id = route.params.id;

        return this.connectionService.listConnectionsBySwitch(id);         
    }
}