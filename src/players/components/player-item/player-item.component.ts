import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Player } from '../../shared/types/player.interface';
import { MenuItem } from 'primeng/api';
import { playersActions } from '../../shared/utils';
import { ButtonActions } from '../../shared/types/actions.type';

@Component({
  selector: 'app-player-item',
  template: `
    <p-card
      *ngIf="player"
      [header]="player.name"
      [subheader]="age"
      [style]="{ width: '360px' }">
      <!--<ng-template pTemplate="header">
        <img
          alt="Card"
          src="https://primefaces.org/cdn/primeng/images/usercard.png" />
      </ng-template>-->
      <p>{{ playerDescription }}</p>
      <ng-template pTemplate="footer">
        <p-splitButton
          label="Details"
          [model]="this.items"
          (onClick)="actionHandler.emit('details')"
          styleClass="p-button-outlined mr-2 mb-2"></p-splitButton>
      </ng-template>
    </p-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.example-card { max-width: 400px;}'],
})
export class PlayerItemComponent {
  @Output() actionHandler = new EventEmitter<ButtonActions>();
  @Input() player: Player | undefined;
  items: MenuItem[];

  constructor() {
    this.items = playersActions((actions: ButtonActions) =>
      this.actionHandler.emit(actions)
    );
  }

  get age() {
    return `Age: ${this.player?.age}`;
  }

  get playerDescription() {
    return `plays in ${this.player?.pos} position for ${this.player?.team?.name}`;
  }
}
