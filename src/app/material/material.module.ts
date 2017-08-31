import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCoreModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule,
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MdButtonModule,
    MdCoreModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
