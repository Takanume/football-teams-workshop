import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageContainer } from './teams/containers/teams-page.container';
import { TeamDetailsModalContainer } from './teams/containers/team-details-modal.container';
import { PageNotFoundComponent } from './core/components/page-not-found.component';
import { TeamEditFormContainer } from './teams/containers/team-edit-form.container';

const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
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
