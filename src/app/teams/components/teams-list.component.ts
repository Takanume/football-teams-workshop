import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../shared/types/team';

@Component({
  selector: 'app-teams-list',
  template: `
    <div class="list-group mb-3">
      <button
        type="button"
        class="list-group-item list-group-item-action"
        *ngFor="let team of teams"
        [ngClass]="this.selectTeamItem(team.id)"
        (click)="showDetails(team.id)">
        {{ team.name }}
      </button>
    </div>
  `,
})
export class TeamsListComponent {
  @Input() teams: Team[] | undefined;
  @Input() selectedTeam: string | null = 'noop';
  @Output() showDetailsAction = new EventEmitter<string>();

  showDetails(teamId: string) {
    this.showDetailsAction.emit(teamId);
  }

  selectTeamItem(teamId: string) {
    return teamId === this.selectedTeam ? 'active' : '';
  }
}
