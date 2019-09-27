import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonListComponent } from './f1/season-list/season-list.component';
import { SeasonDetailsComponent } from './f1/season-details/season-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/season-list', pathMatch: 'full' },
  {
    path: 'season-list', component: SeasonListComponent, children: [
      // { path: '', component: SeasonListComponent },
      { path: ':id', component: SeasonDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
