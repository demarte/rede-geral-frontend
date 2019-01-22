import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormConnection } from './form-connection/form-connection.component';
import { FormConnectionTrunk } from './form-connection-trunk/form-connection-trunk.component';

const routes: Routes = [
  
    {
      path: '', 
      component: FormConnection
    },
    {
      path:'trunk',
      component: FormConnectionTrunk
    }
  ];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ConnectionRoutingModule {

}