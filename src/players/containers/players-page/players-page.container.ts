import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { Player } from '../../shared/types/player.interface';
import { PlayersSandbox } from '../../players.sandbox';
import { ButtonActions } from '../../shared/types/actions.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-page',
  template: ` <section>
      <h1>User Profiles</h1>
      <div *ngIf="players$ | async as players" class="w-10 ">
        <div class="flex card-container justify-content-between">
          <app-player-item
            *ngFor="let player of players; trackBy: playersTrackBy"
            (actionHandler)="onActionHandler($event, player)"
            [player]="player" />
        </div>
      </div>
    </section>
    <router-outlet></router-outlet>`,
})
export class PlayersPageContainer implements OnInit, OnDestroy {
  public players$: Observable<Player[]> = this.sb.getPlayers();

  constructor(private router: Router, private sb: PlayersSandbox) {
    // get a reference to the user-profile collection
    // const userProfileCollection = collection(this.firestore, 'players');
    // get documents (data) from the collection using collectionData
    // this.users$ = collectionData(userProfileCollection) as Observable<any[]>;
  }
  ngOnInit(): void {
    this.sb.fetchPlayers();
  }

  onActionHandler(action: ButtonActions, player: Player) {
    switch (action) {
      case 'details':
        void this.router.navigate([`/players/${player.id}`]);
        break;
    }
  }
  playersTrackBy(index: any, player: Player): number {
    return player.id;
  }
  ngOnDestroy() {
    this.sb.unregisterEvents();
  }
}
