import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../types/player';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Team } from '../../../teams/shared/types/team';

@Injectable()
export class PlayersService {
  private readonly api = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  fetchAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.api}/players`).pipe(
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
  }

  remove(id: number): Observable<Player> {
    return this.httpClient.delete<Player>(`${this.api}/players/${id}`);
  }

  private getTeamsByIds(teamIds: number[]): Observable<Team>[] {
    return teamIds.map(id => {
      return this.httpClient.get<Team>(`${this.api}/teams/${id}`);
    });
  }
}
