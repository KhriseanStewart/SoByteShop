import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PfpcardComponent } from '../components/pfpcard/pfpcard.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../pages/home/home.component';
import { ServicesComponent } from '../pages/services/services.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ProfileComponent,
    PfpcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
})
export class AppsFileModule { }
