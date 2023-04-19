import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PlayersPageContainer } from './containers/players-page.container';
import { PlayersDetailsContainer } from './containers/players-details.container';
import { AddPlayerPageContainer } from './containers/add-player-page.container';
import { EditPlayerPageContainer } from './containers/edit-player-page.container';
import { RouterLink } from '@angular/router';
import { PlayersListComponent } from './components/players-list.component';
import { StoreModule } from '@ngrx/store';
import { playersKey, reducers } from './shared/state/players.selctors';
import { CommonModule } from '@angular/common';
import { PlayersSandbox } from './players.sandbox';
import { PlayersService } from './shared/services/players.service';
import { PlayersEditFormComponent } from './components/players-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    StoreModule.forFeature(playersKey, reducers),
  ],
  declarations: [
    PlayersPageContainer,
    PlayersDetailsContainer,
    AddPlayerPageContainer,
    EditPlayerPageContainer,
    PlayersListComponent,
    PlayersEditFormComponent,
  ],
  providers: [PlayersSandbox, PlayersService],
})
export class PlayersModule {
  constructor() {
    console.log('init players module');
  }
}
