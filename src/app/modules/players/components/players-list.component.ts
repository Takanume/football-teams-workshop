import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../shared/types/player';

@Component({
  selector: 'app-players-list',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Position</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let player of players; let i = index">
          <th scope="row">
            <a [routerLink]="player.id.toString()">
              {{ i + 1 }}
            </a>
          </th>
          <td>{{ player.name }}</td>
          <td>{{ player.age }}</td>
          <td>{{ player.pos }}</td>
          <td>
            <button
              (click)="onAddToFavorite(player)"
              class="btn btn-outline-primary bi bi-star-fill"
              style="margin-right: 5px;"></button>
            <button
              class="btn btn-warning bi bi-pencil"
              style="margin-right: 5px;"
              (click)="onEdit(player.id)"></button>
            <button
              (click)="onRemove(player.id)"
              class="btn btn-outline-danger bi bi-trash3-fill"></button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class PlayersListComponent {
  @Input() players: Player[] | null = [];

  @Output() addToFavorite = new EventEmitter<Player>();
  @Output() edit = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onAddToFavorite(player: Player) {
    this.addToFavorite.emit(player);
  }
  onEdit(id: number) {
    this.edit.emit(id);
  }

  onRemove(id: number) {
    this.remove.emit(id);
  }
}
