import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { PlayersSandbox } from '../players.sandbox';

@Component({
  selector: 'app-team-details',
  template: `
    <app-custom-modal *ngIf="player$ | async as player">
      <div class="modal-header" header>
        <h5 class="modal-title">{{ player.name }}</h5>
        <a class="btn-close" routerLink="/teams"></a>
      </div>
      <div class="modal-body" body>
        <p>
          Player pos: <strong>{{ player.pos }}</strong>
        </p>
        <p>
          Player Team: <strong>{{ player.teamName }}</strong>
        </p>
      </div>
      <div class="modal-footer" footer>
        <a class="btn btn-secondary" routerLink="/players"> Back </a>
      </div>
    </app-custom-modal>
  `,
})
export class PlayersDetailsModalContainer implements OnDestroy {
  player$ = this.route.paramMap.pipe(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    switchMap(paramMap => this.sb.fetchPlayer(+paramMap.get('playerId'))),
    catchError(err => {
      if (err.status) {
        void this.router.navigate(['/not-found']);
      }
      return of(null);
    })
  );
  constructor(
    public sb: PlayersSandbox,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy() {
    void this.router.navigate(['/players']);
  }
}
