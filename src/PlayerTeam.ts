import { Team } from "./Team/Team";
import { Character } from "./Character/Character";

export class PlayerTeam extends Team {
  private static _teamName = "PlayerTeam";
  private static _composition: Character[] = [];

  constructor(){
    super(PlayerTeam._teamName, PlayerTeam._composition)
  }
}
