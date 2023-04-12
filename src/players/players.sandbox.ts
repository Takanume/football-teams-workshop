import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of, Subscription, tap } from 'rxjs';
import { PlayersService } from './shared/services/players.service';
import { Player } from './shared/types/player.interface';
import { PlayersState } from './players.state';

@Injectable()
export class PlayersSandbox {
  private subscriptions: Subscription[] = [];
  constructor(
    private playersService: PlayersService,
    private playersState: PlayersState
  ) {}

  addPlayer(player: any) {}

  updatePlayer(_id: number, player: any) {}

  removePlayer(player: any) {}

  fetchPlayers(): void {
    this.subscriptions.push(
      this.playersService
        .fetchAll()
        .pipe(tap((data: Player[]) => this.playersState.setPlayers(data)))
        .subscribe()
    );
  }

  getPlayers(): Observable<Player[]> {
    return this.playersState.getPlayers();
  }

  getPlayer(id: number): Observable<Player | undefined> {
    return this.playersState
      .getPlayers()
      .pipe(map(playerArray => playerArray.find(player => player.id === id)));
  }

  search(): Observable<any> {
    return of(null);
  }

  unregisterEvents(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
