import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'education', loadChildren: 'app/education/education.module#EducationModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'work', loadChildren: 'app/work/work.module#WorkModule' },
  { path: 'skills', loadChildren: 'app/skills/skills.module#SkillsModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
