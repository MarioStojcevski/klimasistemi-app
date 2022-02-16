import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirConditionerRoutingModule } from './air-conditioner/air-conditioner-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES: Routes = [
  { path: 'air-conditioners', loadChildren: () => import('./air-conditioner/air-conditioner.module').then(m => m.AirConditionerModule)},
  { path: '', redirectTo: 'air-conditioners', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    AirConditionerRoutingModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }