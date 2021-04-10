import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';



@NgModule({
    declarations: [
        LoginComponent,
        ForgetPasswordComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
