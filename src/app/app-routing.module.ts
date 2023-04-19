import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageContainer } from './modules/teams/containers/teams-page.container';
import { TeamDetailsModalContainer } from './modules/teams/containers/team-details-modal.container';
import { PageNotFoundComponent } from './core/components/page-not-found.component';
import { TeamEditFormContainer } from './modules/teams/containers/team-edit-form.container';
import { PlayersPageContainer } from './modules/players/containers/players-page.container';
import { PlayersDetailsContainer } from './modules/players/containers/players-details.container';
import { EditPlayerPageContainer } from './modules/players/containers/edit-player-page.container';
import { AddPlayerPageContainer } from './modules/players/containers/add-player-page.container';

const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  {
    path: 'players/new',
    component: AddPlayerPageContainer,
  },
  {
    path: 'players/:playerId/edit',
    component: EditPlayerPageContainer,
  },
  {
    path: 'players/:playerId',
    component: PlayersDetailsContainer,
  },
  {
    path: 'players',
    component: PlayersPageContainer,
  },
  {
    path: 'teams',
    component: TeamsPageContainer,
    children: [
      {
        path: 'new',
        component: TeamEditFormContainer,
      },
      {
        path: ':teamId/edit',
        component: TeamEditFormContainer,
      },
      {
        path: ':teamId',
        component: TeamDetailsModalContainer,
      },
    ],
  },
  { path: 'not-found', component: PageNotFoundComponent }, // Add this route for the 404 not found page
  //{ path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
