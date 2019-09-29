import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { F1Results, Race } from './../../shared/models/f1-results.dto';
import { F1Standings, StandingsList } from 'src/app/shared/models/f1-standings.dto';

import * as F1Actions from './f1.actions';
import * as fromApp from '../../store/reducers/app.reducer';

@Injectable()
export class F1Effects {
    @Effect()
    getSeasonsStandings = this.actions$.pipe(
        ofType(F1Actions.GET_SEASON_LIST),
        switchMap(() => {
            this.store.dispatch(new F1Actions.Loading());
            return this.http.get<F1Standings>(
                `http://ergast.com/api/f1/driverstandings/1.json?limit=11&offset=55`
            ).pipe(
                map((standings: F1Standings) => {
                    const mappedStandingList = standings.MRData.StandingsTable.StandingsLists.map((standingList: StandingsList) => {
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

                    return new F1Actions.SetSeasonList(mappedStandingList);
                }),
                catchError(val => {
                    return of(new F1Actions.SetError(`Ooops! Everything happens for a reason! <br>
                    Our servers are down but I'm sure the reason we have is really good ;)`));
                })
            );
        })
    );

    @Effect()
    getSeasonResults = this.actions$.pipe(
        ofType(F1Actions.GET_SEASON_DETAILS),
        switchMap((action: F1Actions.GetSeasonDetails) => {
            this.store.dispatch(new F1Actions.Loading());
            return this.http.get<F1Results>(
                `http://ergast.com/api/f1/${action.payload}/results/1.json`
            ).pipe(
                map((results: F1Results) => {
                    const parsedResults = results.MRData.RaceTable.Races.map((race: Race) => {
                        const temp = {
                            ...race,
                            circuit: race.Circuit,
                            results: race.Results[0],
                        };
                        delete temp.Circuit;
                        delete temp.Results;

                        return temp;
                    });

                    return new F1Actions.SetSeasonDetails(parsedResults);
                }),
                catchError(val => {
                    return of(new F1Actions.SetError(`Ooops! The results were too hot to handle! <br>
                    Don't get discouraged and try again later ;)`));
                })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>
    ) { }
}
