import { TeroHomeComponent } from './pages/terobytez/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/marketplace/home/home.component';
import { ServicesComponent } from './pages/marketplace/services/services.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './pages/marketplace/profile/profile.component';
import { AuthGuard } from './auth/core/auth.guard';
import { HomeProfileComponent } from './pages/marketplace/home-profile/home-profile.component';
import { ProductpageComponent } from './pages/marketplace/productpage/productpage.component';
import { MainTeroPageComponent } from './pages/terobytez/main/main.component';

const routes: Routes = [
  { path: 'product/:uuid', component: ProductpageComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: '', component:TeroHomeComponent },
  { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard],},
  { path: 'discover', component:HomeComponent, canActivate: [AuthGuard] },
  { path: 'service', component:ServicesComponent, canActivate: [AuthGuard]},
  { path: 'home_profile', component:HomeProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
