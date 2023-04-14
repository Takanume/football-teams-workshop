import { Component } from '@angular/core';
import { TeamsSandbox } from '../teams.sandbox';

@Component({
  selector: 'app-teams-page',
  template: `
    <h3>Teams list</h3>
    <div class="list-group">
      <a
        class="list-group-item list-group-item-action"
        routerLinkActive="active"
        [routerLink]="team.id"
        *ngFor="let team of teams$ | async">
        {{ team.name }}
      </a>

      <!--<a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        The current link item
      </a>
      <a href="#" class="list-group-item list-group-item-action">A second link item</a>
      <a href="#" class="list-group-item list-group-item-action">A third link item</a>
      <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
      <a class="list-group-item list-group-item-action disabled">A disabled link item</a>-->
    </div>
    <router-outlet></router-outlet>
  `,
})
export class TeamsPageContainer {
  teams$ = this.sb.fetchTeams();
  constructor(private sb: TeamsSandbox) {}
}
