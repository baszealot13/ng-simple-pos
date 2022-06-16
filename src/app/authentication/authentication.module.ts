import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuthenticationComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        FormsModule
    ]
})
export class AuthenticationModule { }
