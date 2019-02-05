import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'SignUp', component:SignupComponent}
  
];

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    // CommonModule
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
