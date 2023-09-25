import { Character } from "../Character/Character";
import { NpcTeam } from "../Team/NpcTeam";
import { PlayerTeam } from "../Team/PlayerTeam";

export class FightHandler {
    private _playerTeam: PlayerTeam;
    private _npcTeam: NpcTeam;

    constructor(playerTeam: PlayerTeam, npcTeam: NpcTeam){
      this._playerTeam = playerTeam;
      this._npcTeam = npcTeam;
    }

    charactersSpeedComparaison(team1: PlayerTeam, team2: NpcTeam) {

        let charactersSortedBySpeed: Character[] = team1.composition.concat(team2.composition);
        charactersSortedBySpeed.sort((a, b) => a.speed - b.speed)
        return charactersSortedBySpeed;
    }

    beforeFight(){
      let allCharacters = this.charactersSpeedComparaison(this.playerTeam, this.npcTeam);
      for (let i = 0; i < allCharacters.length; i++) {
        if (allCharacters[i].characterType.typeName === "Wizard") {
          allCharacters[i].characterType.specialCapacityBeforeAttack;
        } else if (allCharacters[0].characterType.typeName === "Archer") {
          allCharacters[0].characterType.specialCapacityBeforeAttack;
        }
      }
    }


    fight() {
        
    }

    onHit() {}

    public get playerTeam(): PlayerTeam {
        return this._playerTeam;
    }
    public set playerTeam(value: PlayerTeam) {
        this._playerTeam = value;
    }
    public get npcTeam(): NpcTeam {
        return this._npcTeam;
    }
    public set npcTeam(value: NpcTeam) {
        this._npcTeam = value;
    }
}
