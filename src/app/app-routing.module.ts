import { StarterComponent } from './starter/starter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'education', component: StarterComponent },
  { path: 'contact', component: StarterComponent },
  { path: 'work', component: StarterComponent },
  { path: 'about', component: StarterComponent },
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
