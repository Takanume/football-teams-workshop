import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromPlayer from './players.reducer';
export interface PlayersModuleState {
  players: fromPlayer.PlayersState;
}

export const reducers: ActionReducerMap<PlayersModuleState> = {
  players: fromPlayer.playersReducer,
};

export const playersKey = 'players';
export const selectPlayerModuleState =
  createFeatureSelector<PlayersModuleState>(playersKey);

export const selectPlayerState = createSelector(
  selectPlayerModuleState,
  state => state.players
);

export const selectPlayerIds = createSelector(
  selectPlayerState,
  fromPlayer.selectPlayerIds // shorthand for playersState => fromPlayer.selectPlayerIds(playersState)
);
export const selectPlayerEntities = createSelector(
  selectPlayerState,
  fromPlayer.selectPlayerEntities
);
export const selectAllPlayers = createSelector(
  selectPlayerState,
  fromPlayer.selectAllPlayers
);
export const selectPlayerTotal = createSelector(
  selectPlayerState,
  fromPlayer.selectPlayerTotal
);
