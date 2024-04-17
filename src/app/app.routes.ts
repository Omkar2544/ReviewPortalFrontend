import { Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TechstackComponent } from './techstack/techstack.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'maindashboard', component:NavbarComponent, children:[
        {path:'dashboard', component:DashboardComponent},
        {path:'reviews',component:ReviewsComponent},
        {path:'about', component:AboutComponent},
        {path:'techstack', component:TechstackComponent},
        {path:'', redirectTo: 'dashboard',pathMatch:'full'},
        {path:'**', redirectTo: 'dashboard'}
        
    ]},
    {path:'', redirectTo: 'login',pathMatch:'full'},
        {path:'**', redirectTo: 'login'}
];
