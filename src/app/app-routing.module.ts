import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AirConditionersComponent } from './air-conditioner/air-conditioners/air-conditioners.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'air-conditioners', component: AirConditionersComponent, 
    loadChildren: () => import('./air-conditioner/air-conditioner.module').then(m => m.AirConditionerModule)},
  { path: '', component: AirConditionersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
