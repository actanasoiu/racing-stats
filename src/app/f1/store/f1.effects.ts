import { F1Results, Race } from './../../shared/models/f1-results.dto';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

import * as F1Actions from './f1.actions';
import * as fromApp from '../../store/reducers/app.reducer';
import { F1Standings, StandingsList } from 'src/app/shared/models/f1-standings.dto';

@Injectable()
export class F1Effects {
    @Effect()
    getSeasonsStandings = this.actions$.pipe(
        ofType(F1Actions.GET_SEASON_LIST),
        switchMap(() => {
            return this.http.get<F1Standings>(
                `http://ergast.com/api/f1/driverstandings/1.json?limit=11&offset=55`
            );
        }),
        catchError(val => of(`I caught: ${val}`)),
        map((standings: F1Standings) => {
            return standings.MRData.StandingsTable.StandingsLists.map((standingList: StandingsList) => {
                return {
                    season: standingList.season,
                    round: standingList.round,
                    position: standingList.DriverStandings[0].position,
                    positionText: standingList.DriverStandings[0].positionText,
                    points: standingList.DriverStandings[0].points,
                    wins: standingList.DriverStandings[0].wins,
                    driver: standingList.DriverStandings[0].Driver,
                    constructor: standingList.DriverStandings[0].Constructors[0],
                };
            });
        }),
        map(standingList => {
            return new F1Actions.SetSeasonList(standingList);
        })
    );

    @Effect()
    getSeasonResults = this.actions$.pipe(
        ofType(F1Actions.GET_SEASON_DETAILS),
        switchMap(() => {
            return this.http.get<F1Results>(
                `http://ergast.com/api/f1/2005/results/1.json`
            );
        }),
        catchError(val => of(`I caught: ${val}`)),
        map((results: F1Results) => {
            return results.MRData.RaceTable.Races.map((race: Race) => {
                const temp = {
                    ...race,
                    circuit: race.Circuit,
                    results: race.Results[0],
                };
                delete temp.Circuit;
                delete temp.Results;

                return temp;
            });
        }),
        map(results => {
            return new F1Actions.SetSeasonDetails(results);
        })
    );


    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>
    ) { }
}
