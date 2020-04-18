import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap
} from '@ngrx/store';
import { AppState } from './root.reducer';
import* as fromRoot from './root.reducer';

export interface RootState {
  app: fromRoot.AppState
}
export const selectUser = (state: RootState) => {
  return state.app.user;
};
