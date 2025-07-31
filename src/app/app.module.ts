import { TeroHomeComponent } from './pages/terobytez/home/home.component';
import { MatIcon, MatIconLocation } from './../../node_modules/@angular/material/icon/icon.d';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/marketplace/home/home.component';
import { ServicesComponent } from './pages/marketplace/services/services.component';
import { NavbarComponent } from './components/marketplace/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './components/marketplace/footer/footer.component';
import { ProfileComponent } from './pages/marketplace/profile/profile.component';
import { PfpcardComponent } from './components/marketplace/pfpcard/pfpcard.component';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/marketplace/carousel/carousel.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MainComponent } from './components/marketplace/main/main.component';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { HomeProfileComponent } from './pages/marketplace/home-profile/home-profile.component';
import { TesterpageComponent } from './components/testerpage/testerpage.component';
import { ProductpageComponent } from './pages/marketplace/productpage/productpage.component';
import { ContactUsComponent } from './pages/terobytez/contact-us/contact-us.component';
import { ProjectsComponent } from './pages/terobytez/projects/projects.component';
import { NavbarteroComponent } from './components/terobytez/navbartero/navbartero.component';
import { MainTeroPageComponent } from './pages/terobytez/main/main.component';
import { FooterteroComponent } from './components/terobytez/footertero/footertero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ProfileComponent,
    PfpcardComponent,
    CarouselComponent,
    MainComponent,
    HomeProfileComponent,
    TesterpageComponent,
    ProductpageComponent,
    ContactUsComponent,
    ProjectsComponent,
    NavbarteroComponent,
    MainTeroPageComponent,
    TeroHomeComponent,
    FooterteroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxPaginationModule,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
