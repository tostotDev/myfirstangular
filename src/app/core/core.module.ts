import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollTopComponent,
    HomeCarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScrollTopComponent,
    HomeCarouselComponent
  ]
})
export class CoreModule { }
