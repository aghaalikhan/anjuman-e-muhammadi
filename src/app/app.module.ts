import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { PrayerTimeComponent } from './prayer-time/prayer-time.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { EventsCarouselComponent } from './events-carousel/events-carousel.component';
import { ServicesAvailableComponent } from './services-available/services-available.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponentComponent,
    PrayerTimeComponent,
    EventsCarouselComponent,
    ServicesAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    NgbCarouselModule,
    MatChipsModule,
    MatCardModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
