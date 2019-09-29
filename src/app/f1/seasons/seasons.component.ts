import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/reducers/app.reducer';

import { F1SeasonWinnerModel } from '../models/f1-season-winner.model';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  seasons$: Observable<F1SeasonWinnerModel[]>;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.seasons$ = this.store.select(store => store.f1.seasons);
  }

}
