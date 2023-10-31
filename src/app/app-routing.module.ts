import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './comp/home/home.component';
import { ProfileComponent } from './comp/profile/profile.component';
import { MessagesComponent } from './comp/messages/messages.component';
import { SettingsComponent } from './comp/settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './comp/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signup', component: SignupComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
