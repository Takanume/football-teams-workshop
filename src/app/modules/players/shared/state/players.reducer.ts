import { Player } from '../types/player';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as playersActions from './players.actions';

export interface PlayersState extends EntityState<Player> {
  selectedPlayerId: string | null;
}
export const adapter = createEntityAdapter<Player>();

export const initialState: PlayersState = adapter.getInitialState({
  selectedPlayerId: null,
});

export const playersReducer = createReducer(
  initialState,
  on(playersActions.setPlayers, (state, { players }) =>
    adapter.setAll(players, state)
  ),
  on(playersActions.deletePlayer, (state, { id }) =>
    adapter.removeOne(id, state)
  )
);

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of user ids
export const selectPlayerIds = selectIds;

// select the dictionary of user entities
export const selectPlayerEntities = selectEntities;

// select the array of users
export const selectAllPlayers = selectAll;

// select the total user count
export const selectPlayerTotal = selectTotal;
