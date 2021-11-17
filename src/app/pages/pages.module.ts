import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OfferingComponent } from './offering/offering.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OfferingComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    OfferingComponent,
    ContactComponent
  ]
})
export class PagesModule { }
