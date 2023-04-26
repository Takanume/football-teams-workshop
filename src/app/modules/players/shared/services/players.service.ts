import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../types/player';
import { map, mergeMap, Observable } from 'rxjs';
import { Team } from '../../../teams/shared/types/team';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class PlayersService extends EntityCollectionServiceBase<Player> {
  private readonly api = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient,
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Player', serviceElementsFactory);
  }

  fetchPlayer(playerId: number): Observable<Player> {
    return this.httpClient
      .get<Player>(`${this.api}/player/${playerId}`)
      .pipe(
        mergeMap(player =>
          this.httpClient
            .get<Team>(`${this.api}/team/${player.team}`)
            .pipe(map(team => ({ ...player, teamName: team.name })))
        )
      );
  }
}
