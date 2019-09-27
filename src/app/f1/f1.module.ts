import { DataService } from './../shared/services/data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonComponent } from './season/season.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';



@NgModule({
  declarations: [SeasonListComponent, SeasonComponent, SeasonDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [SeasonListComponent, SeasonComponent, SeasonDetailsComponent]
})
export class F1Module { }
