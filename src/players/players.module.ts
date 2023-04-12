import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersSandbox } from './players.sandbox';
import { PlayersPageContainer } from './containers/players-page/players-page.container';
import { PlayersService } from './shared/services/players.service';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PlayerDetailsContainer } from './containers/player-details/player-details.container';
import { PlayersState } from './players.state';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PlayerFormComponent } from './components/player-form/player-form.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    SplitButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
  ],
  declarations: [
    PlayersPageContainer,
    PlayerItemComponent,
    PlayerDetailsContainer,
    PlayerFormComponent,
  ],
  providers: [PlayersSandbox, PlayersService, PlayersState],
})
export class PlayersModule {
  constructor() {
    console.log('init players module');
  }
}
