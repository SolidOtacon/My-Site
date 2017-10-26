import { SimpleComponent } from '../mock-components/simple/simple.component';
import { CoreModule } from './../../src/app/core/core.module';
import { SharedModule } from './../../src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './../../src/environments/environment';
import { AppRoutingModule } from './../../src/app/app-routing.module';
import { reducers } from './../../src/app/ngrx/app.reducers';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [
    SimpleComponent
  ]
})
export class TestModule { }
