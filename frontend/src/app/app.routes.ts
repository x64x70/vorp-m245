import { Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterPageComponent,
        pathMatch: 'full', title: 'Register'
    },
    {
        path: 'login',
        component: LoginPageComponent,
        pathMatch: 'full', title: 'Login'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full', title: 'Dashboard'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/login',
    }
];
