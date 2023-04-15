import { Injectable } from '@angular/core';
import { TeamsService } from './shared/services/teams.service';
import { Observable, tap } from 'rxjs';
import { Team } from './shared/types/team';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/types/country';
import { TeamsState } from './teams.state';

@Injectable()
export class TeamsSandbox {
  teams$ = this.teamsState.teams$;

  constructor(
    private teamsState: TeamsState,
    private teamsService: TeamsService,
    private countriesService: CountriesService
  ) {}

  addTeam(team: Team): Observable<Team> {
    return (
      this.teamsService
        .add(team)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .pipe(tap(_ => this.fetchTeams()))
    );
  }
  fetchCountries(): Observable<Country[]> {
    return this.countriesService.countries$;
  }
  fetchTeam(id: string | null): Observable<Team> {
    return this.teamsService.fetchTeam(id);
  }
  fetchTeams(): void {
    this.teamsService
      .fetchAll()
      .pipe(tap((teams: Team[]) => this.teamsState.setTeams(teams)))
      .subscribe();
  }
}
