import { Component } from '@angular/core';
import { HomeSandbox } from '../home.sandbox';

@Component({
  selector: 'app-home-container',
  template: ` <h4
      class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Favorite players list</span>
    </h4>
    <ul class="list-group mb-3">
      <li
        class="list-group-item list-group-item-action"
        *ngFor="let player of favPlayers$ | async">
        {{ player.name }}
      </li>
    </ul>`,
})
export class HomeContainer {
  favPlayers$ = this.sb.favPlayers$;
  constructor(private sb: HomeSandbox) {}
}
