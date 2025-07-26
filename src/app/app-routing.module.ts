import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './auth/core/auth.guard';
import { HomeProfileComponent } from './pages/home-profile/home-profile.component';

const routes: Routes = [
  //{ path: '', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard],},
  { path: '', component:HomeComponent, canActivate: [AuthGuard] },
  { path: 'service', component:ServicesComponent, canActivate: [AuthGuard]},
  { path: 'home_profile', component:HomeProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
