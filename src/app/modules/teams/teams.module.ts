import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageContainer } from './containers/teams-page.container';
import { TeamsSandbox } from './teams.sandbox';
import { TeamsService } from './shared/services/teams.service';
import { TeamDetailsModalContainer } from './containers/team-details-modal.container';
import { RouterModule } from '@angular/router';
import { TeamEditFormContainer } from './containers/team-edit-form.container';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamsState } from './teams.state';
import { TeamsListComponent } from './components/teams-list.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [
    TeamsPageContainer,
    TeamDetailsModalContainer,
    TeamEditFormContainer,
    TeamsListComponent,
  ],
  providers: [TeamsSandbox, TeamsService, TeamsState],
})
export class TeamsModule {
  constructor() {
    console.log('init teams module');
  }
}
