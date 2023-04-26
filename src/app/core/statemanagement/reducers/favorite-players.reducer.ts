import { Player } from '../../../modules/players/shared/types/player';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as playersActions from '../actions/fav-players.actions';

export type FavoritePLayersState = EntityState<Player>;

export const adapter = createEntityAdapter<Player>();

export const initialState: FavoritePLayersState = adapter.getInitialState({});

export const favPlayersReducer = createReducer(
  initialState,
  on(playersActions.addPlayer, (state, { player }) =>
    adapter.addOne(player, state)
  ),
  on(playersActions.deletePlayer, (state, { id }) =>
    adapter.removeOne(id, state)
  ),
  on(playersActions.clearPlayers, state => adapter.removeAll(state))
);

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of user ids
export const selectFavPlayersIds = selectIds;

// select the dictionary of user entities
export const selectFavPlayersEntities = selectEntities;

// select the array of users
export const selectAllFavPlayers = selectAll;

// select the total user count
export const selectFavPlayersTotal = selectTotal;
