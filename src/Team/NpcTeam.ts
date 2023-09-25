import { Team } from "./Team";
import { Character } from "../Character/Character";

export class NpcTeam extends Team {
  private static _teamName = "NpcTeam";
  private static _composition: Character[] = [];

  constructor(){
    super(NpcTeam._teamName, NpcTeam._composition)
  }
}
