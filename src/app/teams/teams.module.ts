import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageContainer } from './containers/teams-page.container';
import { TeamsSandbox } from './teams.sandbox';
import { TeamsService } from './shared/services/teams.service';
import { TeamDetailsModalContainer } from './containers/team-details-modal.container';
import { RouterModule } from '@angular/router';
import { TeamDetailsFormComponent } from './components/team-details-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [RouterModule],
  declarations: [
    TeamsPageContainer,
    TeamDetailsModalContainer,
    TeamDetailsFormComponent,
  ],
  providers: [TeamsSandbox, TeamsService],
})
export class TeamsModule {
  constructor() {
    console.log('init teams module');
  }
}
