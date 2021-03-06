import * as F1Actions from './f1.actions';
import { F1SeasonWinnerModel } from './../models/f1-season-winner.model';

export interface State {
    seasons: F1SeasonWinnerModel[];
    selectedSeason: F1SeasonWinnerModel;
    error: string;
    loading: boolean;
}

const initialState: State = {
    seasons: [],
    selectedSeason: null,
    error: '',
    loading: false
};

export function f1Reducer(
    state = initialState,
    action: F1Actions.F1Actions
) {
    switch (action.type) {
        case F1Actions.SET_SEASON_LIST:
            return {
                ...state,
                seasons: [...action.payload],
                loading: false
            };
        case F1Actions.SELECT_SEASON:
            return {
                ...state,
                selectedSeason: { ...action.payload }
            };
        case F1Actions.SET_SEASON_DETAILS:
            const index = state.seasons.findIndex(x => +x.season === +state.selectedSeason.season);
            const selectedSeason = {
                ...state.selectedSeason,
                results: [...action.payload]
            };
            const cloneSeasons = [...state.seasons];
            cloneSeasons.splice(index, 1, selectedSeason);
            return {
                ...state,
                seasons: cloneSeasons,
                selectedSeason,
                loading: false
            };
        case F1Actions.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case F1Actions.LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
