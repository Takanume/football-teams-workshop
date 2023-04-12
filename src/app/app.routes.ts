import { PlayersPageContainer } from '../players/containers/players-page/players-page.container';
import { PlayerDetailsContainer } from '../players/containers/player-details/player-details.container';

export const appRoutes: any[] = [
  {
    path: 'players',
    component: PlayersPageContainer,
    children: [
      {
        path: ':playerId',
        component: PlayerDetailsContainer,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full',
  },
];
