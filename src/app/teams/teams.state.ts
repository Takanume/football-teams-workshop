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
}
