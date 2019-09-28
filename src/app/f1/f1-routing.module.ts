import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonDetailsComponent } from './../f1/season-details/season-details.component';
import { SeasonsComponent } from './../f1/seasons/seasons.component';
import { F1ResolverService } from './f1-resolver.service';

const routes: Routes = [
  {
    path: '', component: SeasonsComponent,
    resolve: [F1ResolverService],
    children: [
      {
        path: ':id', component: SeasonDetailsComponent,
        resolve: [F1ResolverService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class F1RoutingModule { }
