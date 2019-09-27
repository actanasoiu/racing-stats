import { F1SeasonWinnerModel } from '../models/f1-season-winner.model';
import { Action } from '@ngrx/store';
import { F1ResultWinnerModel } from '../models/f1-result-winner.model';

export const GET_SEASON_LIST = '[F1] Get Season List';
export const SET_SEASON_LIST = '[F1] Set Season List';
export const GET_SEASON_DETAILS = '[F1] Get Season Details';
export const SET_SEASON_DETAILS = '[F1] Set Season Details';

export class GetSeasonList implements Action {
    readonly type = GET_SEASON_LIST;
}

export class SetSeasonList implements Action {
    readonly type = SET_SEASON_LIST;

    constructor(public payload: F1SeasonWinnerModel[]) { }
}

export class GetSeasonDetails implements Action {
    readonly type = GET_SEASON_DETAILS;

    constructor(public payload: number) { }
}

export class SetSeasonDetails implements Action {
    readonly type = SET_SEASON_DETAILS;

    constructor(public payload: F1ResultWinnerModel[]) { }
}

export type F1Actions =
    | GetSeasonList
    | SetSeasonList
    | GetSeasonDetails
    | SetSeasonDetails;
