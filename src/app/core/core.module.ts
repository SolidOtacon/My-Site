import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

@NgModule({
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
