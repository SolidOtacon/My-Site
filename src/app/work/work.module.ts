import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './components/work/work.component';
import { WorkRoutingModule } from './work-routing.module';
import { WorkContainerComponent } from './containers/work-container/work-container.component';

@NgModule({
  imports: [
    SharedModule,
    WorkRoutingModule
  ],
  declarations: [
    WorkComponent,
    WorkContainerComponent,
  ]
})
export class WorkModule { }
