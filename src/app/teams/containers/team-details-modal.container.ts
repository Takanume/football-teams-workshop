import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsSandbox } from '../teams.sandbox';
import { catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-team-details',
  template: `
    <app-custom-modal *ngIf="team$ | async as team">
      <div class="modal-header" header>
        <h5 class="modal-title">{{ team.name }}</h5>
        <a class="btn-close" routerLink="/teams"></a>
      </div>
      <div class="modal-body" body>
        Team color: <strong>{{ team.color }}</strong>
      </div>
      <div class="modal-footer" footer>
        <a class="btn btn-secondary" routerLink="/teams"> Back </a>
      </div>
    </app-custom-modal>
  `,
})
export class TeamDetailsModalContainer {
  team$ = this.route.paramMap.pipe(
    switchMap(paramMap => this.sb.fetchTeam(paramMap.get('teamId'))),
    catchError(err => {
      if (err.status) {
        void this.router.navigate(['/not-found']);
      }
      return of(null);
    })
  );
  constructor(
    private sb: TeamsSandbox,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
