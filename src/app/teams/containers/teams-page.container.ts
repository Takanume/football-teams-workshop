import { Component, OnInit } from '@angular/core';
import { TeamsSandbox } from '../teams.sandbox';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Team } from '../shared/types/team';

@Component({
  selector: 'app-teams-page',
  template: `
    <div class="row g-5">
      <!-- TEAM LIST -->
      <div class="col-md-5 col-lg-4">
        <a
          class="btn btn-success bi-plus float-end"
          tabindex="-1"
          role="button"
          aria-disabled="true"
          routerLink="./new">
          New Team
        </a>
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Teams list</span>
        </h4>
        <div class="list-group mb-3">
          <a
            class="list-group-item list-group-item-action"
            routerLinkActive="active"
            [routerLink]="team.id"
            *ngFor="let team of teams$ | async">
            {{ team.name }}
          </a>
        </div>
      </div>
      <!-- TEAM FORM -->
      <div class="col-md-7 col-lg-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class TeamsPageContainer implements OnInit {
  teams$: Observable<Team[]> = this.sb.teams$;
  constructor(private sb: TeamsSandbox) {}

  ngOnInit() {
    this.sb.fetchTeams();
  }
}
