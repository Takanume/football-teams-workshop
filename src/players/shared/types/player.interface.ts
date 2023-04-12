import { Team } from './team.interface';

export interface Player {
  id: number;
  name: string;
  age: number;
  pos: string;
  teamId: number;
  team?: Team;
}
