import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { PlayersSandbox } from '../players.sandbox';
import { Team } from '../../teams/shared/types/team';
import { Player } from '../shared/types/player';

@Component({
  selector: 'app-edit-player-page',
  template: ` <h4 class="mb-3">Edit player</h4>
    <app-players-edit-form
      (save)="onSave($event)"
      [player]="this.player$ | async"
      [teams]="teams" />`,
})
export class EditPlayerPageContainer implements OnInit, OnDestroy {
  private events$ = new Subject();
  teams: Team[] = [];
  player$ = this.route.paramMap.pipe(
    switchMap(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      paramMap => this.sb.fetchPlayer(+paramMap.get('playerId'))
    ),
    catchError(err => {
      if (err.status) {
        void this.router.navigate(['/not-found']);
      }
      return of(null);
    })
  );
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sb: PlayersSandbox
  ) {}

  ngOnInit() {
    this.sb
      .fetchTeams()
      .pipe(
        tap(teams => (this.teams = teams)),
        takeUntil(this.events$)
      )
      .subscribe();
  }

  onSave(player: Player) {
    this.sb
      .updatePlayer(player)
      .pipe(
        tap(player => this.router.navigate(['players', player.id])),
        takeUntil(this.events$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.events$.next(null);
    this.events$.complete();
  }
}
