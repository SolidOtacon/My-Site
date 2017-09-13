import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCoreModule,
  MdButtonModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule,
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
