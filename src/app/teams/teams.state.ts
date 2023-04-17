import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from './shared/types/team';

@Injectable()
export class TeamsState {
  private teams: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  teams$ = this.teams.asObservable();
  setTeams(teams: Team[]): void {
    this.teams.next(teams);
  }

  private selectedTeam: BehaviorSubject<string> = new BehaviorSubject<string>(
    'no_team_selected'
  );
  selectedTeam$ = this.selectedTeam.asObservable();

  setSelectedTeam(teamId: string): void {
    this.selectedTeam.next(teamId);
  }
}
