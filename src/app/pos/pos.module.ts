import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { PosCreateComponent } from './pos-create/pos-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PosComponent,
    PosCreateComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    FormsModule
  ]
})
export class PosModule { }
