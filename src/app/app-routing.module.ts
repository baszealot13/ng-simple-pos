import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    }, {
        path: 'pos', loadChildren: () => import('./pos/pos.module').then(m => m.PosModule)
    }, {
        path: '**', redirectTo: 'pos', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
