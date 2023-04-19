import { Injectable } from '@angular/core';
import { PlayersService } from './shared/services/players.service';
import { Store } from '@ngrx/store';
import * as playersActions from './shared/state/players.actions';
import { tap } from 'rxjs';
import { selectAllPlayers } from './shared/state/players.selctors';

@Injectable()
export class PlayersSandbox {
  players$ = this.store.select(selectAllPlayers);
  constructor(private playersService: PlayersService, private store: Store) {}

  fetchPlayers(): void {
    this.playersService
      .fetchAll()
      .pipe(
        tap(players =>
          this.store.dispatch(playersActions.setPlayers({ players }))
        )
      )
      .subscribe();
  }

  removePlayer(playerId: number): void {
    // optimistic deletion
    this.store.dispatch(playersActions.deletePlayer({ id: `${playerId}` }));

    // NOTE: WE CAN IMPROVE IT BY DISPATCHING AND UNDO ACTION WHEN ERROR OCCURRED
    this.playersService.remove(playerId).subscribe();
  }
}
