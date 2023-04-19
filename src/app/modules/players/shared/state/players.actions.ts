import { createAction, props } from '@ngrx/store';
import { Player } from '../types/player';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const setPlayers = createAction(
  '[Players] Set Players',
  props<{ players: Player[] }>()
);

export const updatePlayer = createAction(
  '[Players] Update Player',
  props<{ update: Update<Player> }>()
);
export const addPlayer = createAction(
  '[Players] Add Player',
  props<{ player: Player }>()
);
export const setPlayer = createAction(
  '[Players] Set Player',
  props<{ player: Player }>()
);
export const upsertPlayer = createAction(
  '[Players] Upsert Player',
  props<{ player: Player }>()
);
export const addPlayers = createAction(
  '[Players] Add Players',
  props<{ players: Player[] }>()
);
export const upsertPlayers = createAction(
  '[Players] Upsert Players',
  props<{ players: Player[] }>()
);
export const updatePlayers = createAction(
  '[Players] Update Players',
  props<{ updates: Update<Player>[] }>()
);
export const mapPlayer = createAction(
  '[Players] Map Player',
  props<{ entityMap: EntityMapOne<Player> }>()
);
export const mapPlayers = createAction(
  '[Players] Map Players',
  props<{ entityMap: EntityMap<Player> }>()
);
export const deletePlayer = createAction(
  '[Players] Delete Player',
  props<{ id: string }>()
);
export const deletePlayers = createAction(
  '[Players] Delete Players',
  props<{ ids: string[] }>()
);
export const deletePlayersByPredicate = createAction(
  '[Players] Delete Players By Predicate',
  props<{ predicate: Predicate<Player> }>()
);
export const clearPlayers = createAction('[Players] Clear Players');
