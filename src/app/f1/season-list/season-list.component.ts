import { F1SeasonWinnerModel } from '../models/f1-season-winner.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/reducers/app.reducer';
import * as F1Actions from '../../f1/store/f1.actions';
import { ofType, Actions } from '@ngrx/effects';


@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent implements OnInit, OnDestroy {
  seasons: F1SeasonWinnerModel[];
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('f1')
      .pipe(
        take(1),
        map(f1State => f1State.seasons),
        switchMap(seasons => {
          if (seasons.length === 0) {
            this.store.dispatch(new F1Actions.GetSeasonList());
            return this.actions$.pipe(
              ofType(F1Actions.SET_SEASON_LIST),
              take(1)
            );
          } else {
            return of(seasons);
          }
        })
      ).subscribe((seasons: F1SeasonWinnerModel[]) => {
        this.seasons = seasons.payload;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
