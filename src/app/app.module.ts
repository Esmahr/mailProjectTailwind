import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarButtonComponent } from './components/landing-navbar/navbar-button/navbar-button.component';
import { NavbarLangMenuComponent } from './components/landing-navbar/navbar-lang-menu/navbar-lang-menu.component';
import { NavbarItemComponent } from './components/landing-navbar/navbar-item/navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingNavbarComponent,
    HomeComponent,
    DashboardComponent,
    NavbarButtonComponent,
    NavbarLangMenuComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
