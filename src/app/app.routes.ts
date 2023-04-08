import { PlayersPageContainer } from '../players/containers/players-page/players-page.container';

export const appRoutes: any[] = [
  {
    path: 'players',
    component: PlayersPageContainer,
  },
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full',
  },
];
