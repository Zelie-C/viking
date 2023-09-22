import { Character } from "../Character/Character";

export class FightHandler {
    private _fighterTeam1: Character[] = [];
    private _fighterTeam2: Character[] = [];
    
    beforeAttack(){}
    
    attack() {}
    
    afterAttack() {}

    onHit() {}

    charactersSpeedComparaison(team1: Character[], team2: Character[]) {
        
        let charactersSortedBySpeed: Character[] = team1.concat(team2);
        charactersSortedBySpeed.sort((a, b) => a.speed - b.speed)
        return charactersSortedBySpeed;
    }

    fight() {
        this.charactersSpeedComparaison(this.fighterTeam1, this.fighterTeam2);

         
        let attackerteam1: Character = this.fighterTeam1[0];
        let attackerteam2: Character = this.fighterTeam2[0];


    }

    public get fighterTeam1(): Character[] {
        return this._fighterTeam1;
    }
    public set fighterTeam1(value: Character[]) {
        this._fighterTeam1 = value;
    }
    public get  fighterTeam2(): Character[] {
        return this._fighterTeam2;
    }
    public set  fighterTeam2(value: Character[]) {
        this._fighterTeam2 = value;
    }
}