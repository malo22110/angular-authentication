import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthManager} from './shared/auth/auth.manager';
import { AuthService } from './shared/auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';


export const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent, canActivate: [AuthManager]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthManager]}
];


@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes),
    ],
    exports: [
      RouterModule,
    ],
    providers: [AuthService],
})

export class AppRoutingModule { }
