import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTableComponent } from './main-table/main-table.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MainTableResolver } from './main-table/main-table.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { MainTableSwitchResolver } from './main-table/main-table-switch.resolver';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'form',
    loadChildren: './connection/connection.module#ConnectionModule',
    canActivate : [AuthGuard]
  },
  {
    path: 'connection', 
    component: MainTableComponent,
    resolve: {
      data: MainTableResolver
    },
    canActivate : [AuthGuard]
  },
  {
    path: 'connection/switch/:id', 
    component: MainTableComponent,
    resolve: {
      data: MainTableSwitchResolver
    },
    canActivate : [AuthGuard]
  },  
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
