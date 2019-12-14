// import { FastService } from 'src/app/services/fast.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DatePipe } from '@angular/common';
import { FastService } from './services/fast.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
    // HttpHeaders,
    // HttpHeaderResponse
  ],
  providers: [DatePipe, FastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
