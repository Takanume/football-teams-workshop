import { Component, OnInit } from '@angular/core';
import { PlayersSandbox } from '../players.sandbox';
import { Router } from '@angular/router';
import { Player } from '../shared/types/player';

@Component({
  selector: 'app-players-page',
  template: `
    <div class="container">
      <div class="row">
        <a
          routerLink="./new"
          type="button"
          class="w-25 btn btn-success bi-plus">
          New Player
        </a>
      </div>
      <div class="row mt-5">
        <app-players-list
          (addToFavorite)="onAddToFavorite($event)"
          (edit)="onEdit($event)"
          (remove)="onRemove($event)"
          [players]="players$ | async" />
      </div>
    </div>
  `,
})
export class PlayersPageContainer implements OnInit {
  players$ = this.sb.players$;
  constructor(private sb: PlayersSandbox, private router: Router) {}

  ngOnInit() {
    this.sb.fetchPlayers();
  }

  onAddToFavorite(player: Player) {
    this.sb.addPlayerToFavorite(player);
  }

  onRemove(playerId: number) {
    this.sb.removePlayer(playerId);
  }

  onEdit(playerId: number) {
    void this.router.navigate(['players', playerId, 'edit']);
  }
}
