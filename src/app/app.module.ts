import { MatIcon, MatIconLocation } from './../../node_modules/@angular/material/icon/icon.d';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PfpcardComponent } from './components/pfpcard/pfpcard.component';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MainComponent } from './components/main/main.component';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { HomeProfileComponent } from './pages/home-profile/home-profile.component';
import { TesterpageComponent } from './components/testerpage/testerpage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';

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
    ProductpageComponent
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
