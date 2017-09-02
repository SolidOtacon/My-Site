import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCoreModule,
  MdButtonModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule
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
    MdCardModule
  ],
  declarations: []
})
export class MaterialModule { }
