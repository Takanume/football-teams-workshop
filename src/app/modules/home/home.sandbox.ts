import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPlayers } from '../../core/statemanagement/selectors/fav-players.selectors';

@Injectable()
export class HomeSandbox {
  favPlayers$ = this.store.select(selectAllPlayers);
  constructor(private store: Store) {}
}
