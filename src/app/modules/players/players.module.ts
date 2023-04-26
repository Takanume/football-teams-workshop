import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PlayersPageContainer } from './containers/players-page.container';
import { PlayersDetailsModalContainer } from './containers/players-details-modal.container';
import { AddPlayerPageContainer } from './containers/add-player-page.container';
import { EditPlayerPageContainer } from './containers/edit-player-page.container';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayersListComponent } from './components/players-list.component';
import { CommonModule } from '@angular/common';
import { PlayersSandbox } from './players.sandbox';
import { PlayersService } from './shared/services/players.service';
import { PlayerEditFormComponent } from './components/player-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  declarations: [
    PlayersPageContainer,
    PlayersDetailsModalContainer,
    AddPlayerPageContainer,
    EditPlayerPageContainer,
    PlayersListComponent,
    PlayerEditFormComponent,
  ],
  providers: [PlayersSandbox, PlayersService],
})
export class PlayersModule {
  constructor() {
    console.log('init players module');
  }
}
