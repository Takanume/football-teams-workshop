import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageContainer } from './teams/containers/teams-page.container';
import { TeamDetailsModalContainer } from './teams/containers/team-details-modal.container';
import { NotFoundComponent } from './core/components/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  {
    path: 'teams',
    component: TeamsPageContainer,
    children: [
      {
        path: ':teamId',
        component: TeamDetailsModalContainer,
      },
    ],
  },
  { path: 'not-found', component: NotFoundComponent }, // Add this route for the 404 not found page
  //{ path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
