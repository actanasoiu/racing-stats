import { F1RoutingModule } from './f1-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonComponent } from './season/season.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SeasonComponent, SeasonDetailsComponent, SeasonsComponent],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
    F1RoutingModule,
  ],
  exports: [SeasonComponent, SeasonDetailsComponent, SeasonsComponent]
})
export class F1Module { }
