import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTableComponent } from './main-table/main-table.component';
import { LoginComponent } from './home/login/login.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MainTableResolver } from './main-table/main-table.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './home/signup/signup.component';

const routes: Routes = [
  {
    path: 'connection', 
    component: MainTableComponent,
    resolve: {
      data: MainTableResolver
    }
  },
  {
    path: 'connection/switch/:id', 
    component: MainTableComponent,
    resolve: {
      data: MainTableResolver
    }
  },  
  {
    path: '', 
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup', 
    component: SignUpComponent,
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
