import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Pant1Component} from '../pant1/pant1.component';
import {PpalComponent} from '../ppal/ppal.component';

const routes: Routes = [
  {path: 'pant1', component: Pant1Component },
  {path: 'ppal', component: PpalComponent },
  {path: '', redirectTo: '/ppal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloRoutingRoutingModule { }
export const routing=RouterModule.forRoot(routes);