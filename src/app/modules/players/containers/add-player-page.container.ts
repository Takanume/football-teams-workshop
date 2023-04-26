import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayersSandbox } from '../players.sandbox';
import { Team } from '../../teams/shared/types/team';
import { Subject, takeUntil, tap } from 'rxjs';
import { Player } from '../shared/types/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player-page',
  template: `
    <h4 class="mb-3">Add new player</h4>
    <app-players-edit-form (save)="onSave($event)" [teams]="teams" />
  `,
})
export class AddPlayerPageContainer implements OnInit, OnDestroy {
  private events$ = new Subject();
  teams: Team[] = [];

  constructor(private sb: PlayersSandbox, private router: Router) {}

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
      .savePlayer(player)
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
