import { Injectable } from '@angular/core';
import { TeamsService } from './shared/services/teams.service';
import { Observable } from 'rxjs';
import { Team } from './shared/types/team';

@Injectable()
export class TeamsSandbox {
  constructor(private teamsService: TeamsService) {}

  fetchTeam(id: string | null): Observable<Team> {
    return this.teamsService.fetchTeam(id);
  }
  fetchTeams(): Observable<Team[]> {
    return this.teamsService.fetchAll();
  }
}
