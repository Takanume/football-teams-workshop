import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { Team } from '../types/team';
import { Country } from '../../../../shared/types/country';

@Injectable()
export class TeamsService {
  private readonly api = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  fetchTeam(id: string | null): Observable<Team> {
    return this.httpClient
      .get<Team>(`${this.api}/team/${id}`)
      .pipe(switchMap(team => this.mapCountryName(team)));
  }
  fetchAll(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.api}/team`);
  }

  add(team: Team): Observable<Team> {
    return this.httpClient.post<Team>(`${this.api}/team`, team);
  }

  edit(team: Team): Observable<Team> {
    return this.httpClient.put<Team>(`${this.api}/team/${team.id}`, team);
  }

  private mapCountryName(team: Team): Observable<Team> {
    return this.httpClient
      .get<Country>(`${this.api}/country/${team.country}`)
      .pipe(
        map(country => ({ ...team, countryName: country.name } as Team)) // Map the country name
      );
  }

  remove(id: string): Observable<Team> {
    return this.httpClient.delete<Team>(`${this.api}/team/${id}`);
  }
}
