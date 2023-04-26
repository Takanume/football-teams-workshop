import { Injectable } from '@angular/core';
import { PlayersService } from './shared/services/players.service';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Team } from '../teams/shared/types/team';
import { TeamsService } from '../teams/shared/services/teams.service';
import { Player } from './shared/types/player';
import { addPlayer } from '../../core/statemanagement/actions/fav-players.actions';

@Injectable()
export class PlayersSandbox {
  players$ = this.playersService.entities$;
  constructor(
    private playersService: PlayersService,
    private teamsService: TeamsService,
    private store: Store
  ) {}

  fetchPlayers(): void {
    this.playersService.getAll();
  }

  fetchPlayer(playerId: number | null): Observable<Player> {
    return this.playersService.fetchPlayer(playerId as number);
  }

  savePlayer(player: Player): Observable<Player> {
    return this.playersService.add(player);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.playersService.update(player);
  }

  removePlayer(playerId: number): void {
    this.playersService.delete(playerId).pipe(tap(_ => this.fetchPlayers()));
  }
  fetchTeams(): Observable<Team[]> {
    return this.teamsService.fetchAll();
  }

  addPlayerToFavorite(player: Player) {
    this.store.dispatch(addPlayer({ player }));
  }
}
