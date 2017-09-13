import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  imports: [
    SharedModule,
    SkillsRoutingModule,
  ],
  declarations: [
    SkillsComponent
  ]
})
export class SkillsModule { }
