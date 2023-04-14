import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsSandbox } from '../teams.sandbox';
import { catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-team-details',
  template: `
    <app-custom-modal>
      <div class="modal-header" header>
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" (click)="closeModal()"></button>
      </div>
      <div class="modal-body" body>body</div>
      <div class="modal-footer" footer>footer</div>
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

  closeModal() {
    void this.router.navigate(['/teams']);
  }
}
