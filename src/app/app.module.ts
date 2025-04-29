import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { ParticipateComponent } from './participate/participate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ParticipantsComponent } from './participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SigninComponent,
    SignupComponent,
    NavComponent,
    EventsComponent,
    EventComponent,
    ParticipateComponent,
    AdminHomeComponent,
    ManageEventComponent,
    EventDetailComponent,
    ParticipantsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
