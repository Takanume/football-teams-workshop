import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from './shared/types/player.interface';

@Injectable()
export class PlayersState {
  private players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(
    []
  );
  constructor() {}

  getPlayers(): Observable<Player[]> {
    return this.players.asObservable();
  }

  setPlayers(playersValue: Player[]) {
    this.players.next(playersValue);
  }
}
