import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageContainer } from './containers/teams-page.container';
import { TeamsSandbox } from './teams.sandbox';
import { TeamsService } from './shared/services/teams.service';
import { TeamDetailsModalContainer } from './containers/team-details-modal.container';
import { RouterModule } from '@angular/router';
import { TeamEditFormComponent } from './components/team-edit-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [
    TeamsPageContainer,
    TeamDetailsModalContainer,
    TeamEditFormComponent,
  ],
  providers: [TeamsSandbox, TeamsService],
})
export class TeamsModule {
  constructor() {
    console.log('init teams module');
  }
}
