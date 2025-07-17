import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  //{ path: '', component:HomeComponent },
  { path: '', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'discover', component:HomeComponent },
  { path: 'service', component:ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
