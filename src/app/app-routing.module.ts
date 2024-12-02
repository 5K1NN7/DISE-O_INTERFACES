import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid1Component } from './components/trabajo/trabajo.component';
import { Grid2Component } from './components/trabajo-2/trabajo-2.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/trabajo-3/trabajo-3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trabajo', component: Grid1Component },
  { path: 'trabajo-2', component: Grid2Component },
  { path: 'trabajo-3', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
