import { F1ResultWinnerModel } from 'src/app/f1/models/f1-result-winner.model';
import { F1Results } from './../../shared/models/f1-results.dto';
import { F1SeasonWinnerModel } from './../models/f1-season-winner.model';
import * as F1Actions from './f1.actions';

export interface State {
    seasons: F1SeasonWinnerModel[];
    seasonSelected: F1SeasonWinnerModel;
    seasonDetails: F1ResultWinnerModel[];
}

const initialState: State = {
    seasons: [],
    seasonSelected: null,
    seasonDetails: [],
};

export function f1Reducer(
    state = initialState,
    action: F1Actions.F1Actions
) {
    switch (action.type) {
        case F1Actions.SET_SEASON_LIST:
            return {
                ...state,
                seasons: [...action.payload]
            };
        case F1Actions.SET_SEASON_DETAILS:
            return {
                ...state,
                seasonDetails: [...action.payload]
            };
        default:
            return state;
    }
}
