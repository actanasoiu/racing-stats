import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromF1 from '../../f1/store/f1.reducer';

export interface AppState {
  f1: fromF1.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  f1: fromF1.f1Reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
