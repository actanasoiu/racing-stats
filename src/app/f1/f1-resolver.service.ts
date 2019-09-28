import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { F1SeasonWinnerModel } from './models/f1-season-winner.model';

import * as fromApp from './../store/reducers/app.reducer';
import * as F1Actions from '../f1/store/f1.actions';

@Injectable({ providedIn: 'root' })
export class F1ResolverService implements Resolve<F1SeasonWinnerModel[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('f1').pipe(
      take(1),
      switchMap(f1State => {
        if (f1State.seasons.length === 0) {
          this.store.dispatch(new F1Actions.GetSeasonList());
          return this.actions$.pipe(
            ofType(F1Actions.SET_SEASON_LIST),
            take(1)
          );
        } else {
          return of(f1State.seasons);
        }
      })
    );
  }
}
