import { ActionReducerMap } from '@ngrx/store';
import {
  FavoritePLayersState,
  favPlayersReducer,
} from './favorite-players.reducer';

export interface CoreState {
  favoritePlayers: FavoritePLayersState;
}

export const reducers: ActionReducerMap<CoreState> = {
  favoritePlayers: favPlayersReducer,
};
