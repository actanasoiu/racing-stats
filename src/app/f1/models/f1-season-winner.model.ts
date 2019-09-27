import { Constructor } from '../../shared/models/f1-results.dto';
import { Driver } from '../../shared/models/f1-standings.dto';

export interface F1SeasonWinnerModel {
    season: string;
    round: string;
    position: string;
    positionText: string;
    points: string;
    wins: string;
    driver: Driver;
    constructor: Constructor;
}