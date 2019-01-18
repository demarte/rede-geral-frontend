import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations : [LoginComponent, SignUpComponent],
    imports : [ CommonModule, 
                ReactiveFormsModule, 
                VMessageModule,
                FormsModule,
                RouterModule
            ]
})
export class HomeModule {

}