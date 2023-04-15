import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../types/team';

@Injectable()
export class TeamsService {
  private readonly api = 'http://localhost:3000/teams';
  constructor(private httpClient: HttpClient) {}

  fetchTeam(id: string | null): Observable<Team> {
    return this.httpClient.get<Team>(`${this.api}/${id}`);
  }
  fetchAll(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.api);
  }

  add(team: Team): Observable<Team> {
    return this.httpClient.post<Team>(this.api, team);
  }
}
