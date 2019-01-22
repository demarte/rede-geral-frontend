import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTableComponent } from './main-table/main-table.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MainTableResolver } from './main-table/main-table.resolver';
import { AuthGuard } from './core/auth/auth.guard';


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
    loadChildren: './connection/connection.module#ConnectionModule'
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
      data: MainTableResolver
    }
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
