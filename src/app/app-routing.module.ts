import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { SettingsComponent } from './dashboard/settings/settings.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: 'dashboard/home', component: HomeComponent },
  { path: 'dashboard/profile', component: ProfileComponent },
  { path: 'dashboard/messages', component: MessagesComponent },
  { path: 'dashboard/settings', component: SettingsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
