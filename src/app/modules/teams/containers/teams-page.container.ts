import { Component, OnInit } from '@angular/core';
import { TeamsSandbox } from '../teams.sandbox';
import { Observable } from 'rxjs';
import { Team } from '../shared/types/team';
import { Router } from '@angular/router';

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
        <ng-container *ngIf="teams$ | async as teams">
          <app-teams-list
            (showDetailsAction)="onShowDetails($event)"
            [teams]="teams"
            [selectedTeam]="this.selectedTeam$ | async"></app-teams-list>
        </ng-container>
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
  selectedTeam$: Observable<string> = this.sb.selectedTeam$;
  constructor(private sb: TeamsSandbox, private router: Router) {}

  ngOnInit() {
    this.sb.fetchTeams();
  }
  onShowDetails(teamId: string) {
    void this.router.navigate(['/teams', teamId]);
  }
}
