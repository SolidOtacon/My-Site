import { SharedModule } from './../shared/shared.module';
import { EducationRoutingModule } from './education-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './components/education/education.component';
import { EducationContainerComponent } from './containers/education-container/education-container.component';

@NgModule({
  imports: [
    SharedModule,
    EducationRoutingModule
  ],
  declarations: [
    EducationComponent,
    EducationContainerComponent
  ]
})
export class EducationModule { }
