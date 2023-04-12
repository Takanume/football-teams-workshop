import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, map, of, switchMap, tap } from 'rxjs';
import { PlayersSandbox } from '../../players.sandbox';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-details',
  template: `<div *ngIf="player$ | async as player">
    <p-dialog
      (onHide)="this.router.navigate(['..'], { relativeTo: this.route })"
      header="Player Form"
      [(visible)]="showDialog"
      [modal]="true"
      [breakpoints]="{ '960px': '75vw' }"
      [style]="{ width: '50vw' }"
      [draggable]="false"
      [resizable]="false">
      <app-player-form />
      <p>
        {{ player.name }}
      </p>
    </p-dialog>
  </div>`,
})
export class PlayerDetailsContainer {
  private playerId$ = this.route.params.pipe(map((p: Params) => p['playerId']));

  player$ = this.playerId$.pipe(
    tap(_ => (this.showDialog = true)),
    switchMap(id => this.sb.getPlayer(+id))
  );

  showDialog = false;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private sb: PlayersSandbox
  ) {}
}
