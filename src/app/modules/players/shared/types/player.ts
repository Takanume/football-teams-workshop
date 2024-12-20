import { Team } from '../../../teams/shared/types/team';

export interface Player {
  id: number;
  name: string;
  age: number;
  pos: string;
  foot: string;
  height: number;
  teamName: string;
  team?: Team | number;
}
