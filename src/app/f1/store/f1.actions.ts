import { Action } from '@ngrx/store';
import { F1SeasonWinnerModel } from '../models/f1-season-winner.model';
import { F1ResultWinnerModel } from '../models/f1-result-winner.model';

export const GET_SEASON_LIST = '[F1] Get Season List';
export const SET_SEASON_LIST = '[F1] Set Season List';
export const SELECT_SEASON = '[F1] Select Season';
export const GET_SEASON_DETAILS = '[F1] Get Season Details';
export const SET_SEASON_DETAILS = '[F1] Set Season Details';
export const SET_ERROR = '[F1] Set Error';
export const LOADING = '[F1] Loading';

export class GetSeasonList implements Action {
    readonly type = GET_SEASON_LIST;
}

export class SetSeasonList implements Action {
    readonly type = SET_SEASON_LIST;

    constructor(public payload: F1SeasonWinnerModel[]) { }
}

export class SelectSeason implements Action {
    readonly type = SELECT_SEASON;

    constructor(public payload: F1SeasonWinnerModel) { }
}

export class GetSeasonDetails implements Action {
    readonly type = GET_SEASON_DETAILS;

    constructor(public payload: number) { }
}

export class SetSeasonDetails implements Action {
    readonly type = SET_SEASON_DETAILS;

    constructor(public payload: F1ResultWinnerModel[]) { }
}

export class SetError implements Action {
    readonly type = SET_ERROR;

    constructor(public payload: string) { }
}

export class Loading implements Action {
    readonly type = LOADING;
}

export type F1Actions =
    | GetSeasonList
    | SetSeasonList
    | SelectSeason
    | GetSeasonDetails
    | SetSeasonDetails
    | SetError
    | Loading;
