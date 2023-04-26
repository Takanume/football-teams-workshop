import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFavPlayer from '../reducers/favorite-players.reducer';
import { FavoritePLayersState } from '../reducers/favorite-players.reducer';

const selectFavPlayersState =
  createFeatureSelector<FavoritePLayersState>('favoritePlayers');

export const selectFavPlayerIds = createSelector(
  selectFavPlayersState,
  fromFavPlayer.selectFavPlayersIds
);
export const selectPlayerEntities = createSelector(
  selectFavPlayersState,
  fromFavPlayer.selectFavPlayersEntities
);
export const selectAllPlayers = createSelector(
  selectFavPlayersState,
  fromFavPlayer.selectAllFavPlayers
);
export const selectPlayerTotal = createSelector(
  selectFavPlayersState,
  fromFavPlayer.selectFavPlayersTotal
);
