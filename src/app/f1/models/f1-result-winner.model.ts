import { Constructor, Circuit, Result } from '../../shared/models/f1-results.dto';

export interface F1ResultWinnerModel {
    season: string;
    round: string;
    url: string;
    raceName: string;
    circuit: Circuit;
    date: string;
    time: string;
    results: Result;
}