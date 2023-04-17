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
  selectedTeam$ = this.teamsState.selectedTeam$;

  constructor(
    private teamsState: TeamsState,
    private teamsService: TeamsService,
    private countriesService: CountriesService
  ) {}

  saveTeam(team: Team): Observable<Team> {
    if (team.id) {
      return (
        this.editTeam(team)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .pipe(tap(_ => this.fetchTeams()))
      );
    }
    return (
      this.teamsService
        .add(team)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .pipe(tap(_ => this.fetchTeams()))
    );
  }

  editTeam(team: Team): Observable<Team> {
    return (
      this.teamsService
        .edit(team)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .pipe(tap(_ => this.fetchTeams()))
    );
  }

  removeTeam(teamId: string): void {
    this.teamsService
      .remove(teamId)
      .pipe(tap(() => this.fetchTeams()))
      .subscribe();
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

  setSelectedTeam(teamId: string): void {
    this.teamsState.setSelectedTeam(teamId);
  }
}
