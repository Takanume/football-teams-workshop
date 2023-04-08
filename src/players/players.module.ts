import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersSandbox } from './players.sandbox';
import { PlayersPageContainer } from './containers/players-page/players-page.container';
import { PlayersService } from './shared/services/players.service';
import { MatCardModule } from '@angular/material/card';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [PlayersPageContainer, PlayerItemComponent],
  providers: [PlayersSandbox, PlayersService],
})
export class PlayersModule {
  constructor() {
    console.log('init players module');
  }
}
