import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact.component';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
