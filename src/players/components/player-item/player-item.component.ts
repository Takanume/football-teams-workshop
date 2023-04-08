import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '../../shared/types/player.interface';

@Component({
  selector: 'app-player-item',
  template: ` <mat-card class="example-card">
    <mat-card-header>
      <mat-card-title>
        {{ player?.name }}
      </mat-card-title>
      <mat-card-subtitle>
        <strong>Age : </strong>{{ player?.age }}
      </mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <p>Play as : {{ player?.pos }}</p>
      <p>long description</p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button>LIKE</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
  </mat-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.example-card { max-width: 400px;}'],
})
export class PlayerItemComponent {
  @Input() player: Player | undefined;
}
