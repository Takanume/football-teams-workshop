import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, switchMap } from 'rxjs';
import { Player } from '../types/player.interface';
import { Team } from '../types/team.interface';

@Injectable()
export class PlayersService {
  private apiUrl = 'http://localhost:3000'; // Replace with the actual API URL or file path

  constructor(private http: HttpClient) {}

  add(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}/players`, player);
  }

  update(id: number, player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiUrl}/players/${id}`, player);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/players/${id}`);
  }

  fetchAll(): Observable<Player[]> {
    return this.http.get<Team[]>(`${this.apiUrl}/teams`).pipe(
      switchMap(teams => {
        return this.http.get<Player[]>(`${this.apiUrl}/players`).pipe(
          map(players => {
            players.forEach(player => {
              player.team = teams.find(team => team.id === player.teamId);
            });
            return players;
          })
        );
      })
    );
  }

  fetchPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/players/${id}`).pipe(
      switchMap(player => {
        return this.http
          .get<Team>(`${this.apiUrl}/teams/${player.teamId}`)
          .pipe(
            switchMap(team => {
              player.team = team;
              return of(player);
            })
          );
      })
    );
  }
}
