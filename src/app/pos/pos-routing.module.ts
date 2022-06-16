import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { PosCreateComponent } from './pos-create/pos-create.component';
import { PosComponent } from './pos.component';

const routes: Routes = [
    { path: '', component: PosComponent, canActivate: [AuthGuard] },
    { path: 'create', component: PosCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PosRoutingModule { }
