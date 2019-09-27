import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { F1Standings, StandingsList } from './../models/f1-standings.dto';
import { F1Results, Race } from '../models/f1-results.dto';

@Injectable({ providedIn: 'root' })
export class DataService {

    constructor(private http: HttpClient) {
    }

    getSeasonsStandings(position: number = 1, limit: number = 11, offset: number = 55) {
        return this.http.get<F1Standings>(`http://ergast.com/api/f1/driverstandings/${position}.json?limit=${limit}&offset=${offset}`)
            .pipe(
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
                })
            );
    }

    getSeasonResults(season: number, position: number = 1) {
        return this.http.get<F1Results>(`http://ergast.com/api/f1/${season}/results/${position}.json`)
            .pipe(
                catchError(val => of(`I caught: ${val}`)),
                map((standings: F1Results) => {
                    return standings.MRData.RaceTable.Races.map((race: Race) => {
                        const results = {
                            ...race,
                            circuit: race.Circuit,
                            results: race.Results[0],
                        };
                        delete results.Circuit;
                        delete results.Results;
                    });
                })
            );
    }
}