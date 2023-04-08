import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlayersService } from './shared/services/players.service';
import { Player } from './shared/types/player.interface';

@Injectable()
export class PlayersSandbox {
  constructor(private playersService: PlayersService) {}

  addPlayer(player: any) {}

  updatePlayer(_id: number, player: any) {}

  removePlayer(player: any) {}

  fetchPlayers(): Observable<any> {
    return this.playersService.fetchAll();
  }

  search(): Observable<any> {
    return of(null);
  }
}
