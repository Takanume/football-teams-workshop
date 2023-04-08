import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { PlayersService } from '../../shared/services/players.service';
import { Player } from '../../shared/types/player.interface';
import { PlayersSandbox } from '../../players.sandbox';

@Component({
  selector: 'app-players-page',
  template: ` <section>
    <h1>User Profiles</h1>
    <div *ngIf="players$ | async as players">
      <app-player-item
        *ngFor="let player of players; trackBy: playersTrackBy"
        [player]="player" />
    </div>
  </section>`,
})
export class PlayersPageContainer implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public players$: Observable<Player[]>;

  constructor(private sb: PlayersSandbox) {
    // get a reference to the user-profile collection
    // const userProfileCollection = collection(this.firestore, 'players');
    // get documents (data) from the collection using collectionData
    // this.users$ = collectionData(userProfileCollection) as Observable<any[]>;
    this.players$ = of([]);
  }
  ngOnInit(): void {
    this.players$ = this.sb.fetchPlayers();

    this.sb
      .fetchPlayers()
      .pipe(tap(data => console.log(data)))
      .subscribe();
  }

  playersTrackBy(index: any, player: Player): number {
    return player.id;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
