import { StarterComponent } from './starter/starter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'education', component: StarterComponent },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'work', loadChildren: 'app/work/work.module#WorkModule' },
  { path: 'about', component: StarterComponent },
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
