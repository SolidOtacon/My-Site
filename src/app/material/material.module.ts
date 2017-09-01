import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCoreModule,
  MdButtonModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
