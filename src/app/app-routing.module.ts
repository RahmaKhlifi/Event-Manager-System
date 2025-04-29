import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventsComponent } from './events/events.component';
import { ParticipateComponent } from './participate/participate.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { authGuard } from './guards/auth.guard';
import { ManageEventComponent } from './manage-event/manage-event.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent , pathMatch:'full'  },
  {path:'events', component:EventsComponent },
  {path:'login', component:SigninComponent },
  {path:'signup', component:SignupComponent },
  {path:'participate/:id', component:ParticipateComponent },
  {path:'home', component:AdminHomeComponent  },
  {path:'manage/:id', component:ManageEventComponent  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
