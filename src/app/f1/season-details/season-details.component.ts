import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { F1SeasonWinnerModel } from './../models/f1-season-winner.model';
import { F1ResultWinnerModel } from 'src/app/f1/models/f1-result-winner.model';

import * as fromApp from './../../store/reducers/app.reducer';
import * as F1Actions from '../../f1/store/f1.actions';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent implements OnInit {
  @ViewChild('details', { static: false }) resultsElem: ElementRef;
  results: F1ResultWinnerModel[];
  selectedSeason: F1SeasonWinnerModel;
  season: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private actions$: Actions,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params.id;
        }),
        switchMap(id => {
          this.store.select('f1').pipe(
            take(1),
            map(f1State => f1State),
            switchMap(f1State => {
              this.selectedSeason = f1State.seasons.find(x => +x.season === id);
              this.store.dispatch(new F1Actions.SelectSeason(this.selectedSeason));

              if (!this.selectedSeason.results) {
                this.store.dispatch(new F1Actions.GetSeasonDetails(id));
                return this.actions$.pipe(
                  ofType(F1Actions.SET_SEASON_DETAILS),
                  take(1)
                );
              } else {
                return of({ payload: this.selectedSeason.results });
              }

            })
          ).subscribe((results: any) => {
            this.results = results.payload;
            setTimeout(() => {
              this.resultsElem.nativeElement.scrollIntoView({ behavior: 'smooth' });
            }, 0);
          });
          return of(null);
        })
      ).subscribe();
  }

}
