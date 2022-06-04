import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrzavaComponent } from './drzava/drzava.component';
const routes: Routes = [
  { path: '', redirectTo: '/drzave', pathMatch: 'full' },
  { path: 'drzave', component: DrzavaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
