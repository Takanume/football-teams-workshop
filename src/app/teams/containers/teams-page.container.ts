import { Component } from '@angular/core';
import { TeamsSandbox } from '../teams.sandbox';
import { ActivatedRoute, Router } from '@angular/router';

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
export class TeamsPageContainer {
  teams$ = this.sb.fetchTeams();
  constructor(
    private sb: TeamsSandbox,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addNewTeam() {
    void this.router.navigate(['new'], { relativeTo: this.route });
  }
}
