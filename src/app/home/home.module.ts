import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations : [LoginComponent],
    imports : [ CommonModule, 
                ReactiveFormsModule, 
                VMessageModule,
                RouterModule
            ]
})
export class HomeModule {

}