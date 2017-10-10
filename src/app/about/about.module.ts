import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AboutContainerComponent } from './containers/about-container/about-container.component';

@NgModule({
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    AboutContainerComponent
  ]
})
export class AboutModule { }
