import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsContainerComponent } from './containers/skills-container/skills-container.component';

@NgModule({
  imports: [
    SharedModule,
    SkillsRoutingModule,
  ],
  declarations: [
    SkillsComponent,
    SkillsContainerComponent
  ]
})
export class SkillsModule { }
