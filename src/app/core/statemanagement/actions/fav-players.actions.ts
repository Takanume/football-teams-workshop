import { createAction, props } from '@ngrx/store';
import { Player } from '../../../modules/players/shared/types/player';

export const enum FavPlayersActions {
  ADD_PLAYER = '[Fav Players] Add Player',
  DELETE_PLAYER = '[Fav Players] Delete Player',
  CLEAR_PLAYERS = '[Fav Players] Clear Players',
}

export const addPlayer = createAction(
  FavPlayersActions.ADD_PLAYER,
  props<{ player: Player }>()
);

export const deletePlayer = createAction(
  FavPlayersActions.DELETE_PLAYER,
  props<{ id: string }>()
);

export const clearPlayers = createAction(FavPlayersActions.CLEAR_PLAYERS);
