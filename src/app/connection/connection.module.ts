import { NgModule } from '@angular/core';
import { FormConnection } from './form-connection/form-connection.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { ConnectionRoutingModule } from './connection.routing.module';
import { FormConnectionTrunk } from './form-connection-trunk/form-connection-trunk.component';

@NgModule({
    declarations : [ FormConnection, FormConnectionTrunk ],
    imports : 
    [
        CommonModule,
        ReactiveFormsModule, 
        VMessageModule,
        FormsModule,
        RouterModule,
        ConnectionRoutingModule
    ]
})
export class ConnectionModule {

}