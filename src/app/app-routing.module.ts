import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipateComponent } from './participate/participate.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent , pathMatch:'full' },
  {path:'participate', component:ParticipateComponent },
  {path:'login', component:SigninComponent },
  {path:'signup', component:SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
