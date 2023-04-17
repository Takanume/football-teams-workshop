import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsSandbox } from '../teams.sandbox';
import { catchError, of, switchMap, tap } from 'rxjs';

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
      <div class="modal-body" body>
        Team country:
        <strong>{{ team.countryName }}</strong>
      </div>
      <div class="modal-footer" footer>
        <a class="btn btn-secondary" routerLink="/teams"> Back </a>
        <a class="btn btn-warning" [routerLink]="['/teams', team.id, 'edit']">
          Edit
        </a>
        <button
          type="button"
          class="btn btn-danger"
          (click)="this.removeTeam(team.id)">
          delete
        </button>
      </div>
    </app-custom-modal>
  `,
})
export class TeamDetailsModalContainer implements OnDestroy {
  team$ = this.route.paramMap.pipe(
    switchMap(paramMap => this.sb.fetchTeam(paramMap.get('teamId'))),
    tap(team => this.sb.setSelectedTeam(team.id)),
    catchError(err => {
      if (err.status) {
        void this.router.navigate(['/not-found']);
      }
      return of(null);
    })
  );
  constructor(
    public sb: TeamsSandbox,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  removeTeam(teamId: string) {
    this.sb.removeTeam(teamId);
    void this.router.navigate(['/teams']);
  }

  ngOnDestroy() {
    this.sb.setSelectedTeam('none');
  }
}
