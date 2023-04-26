import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../types/player';
import { forkJoin, map, mergeMap, Observable, switchMap } from 'rxjs';
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

  /* override getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.api}/player`).pipe(
      switchMap(players => {
        const teamIds = players.map(player => player.team);
        return forkJoin(this.getTeamsByIds(teamIds as number[])).pipe(
          map(teams => {
            return players.map(player => {
              if (typeof player.team === 'number') {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const { name } = teams.find(t => t.id === player.team);
                return { ...player, teamName: name };
              }
              return player;
            });
          })
        );
      })
    );
  } */

  private getTeamsByIds(teamIds: number[]): Observable<Team>[] {
    return teamIds.map(id => {
      return this.httpClient.get<Team>(`${this.api}/team/${id}`);
    });
  }
}
