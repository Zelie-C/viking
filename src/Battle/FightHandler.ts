import { Character } from "../Character/Character";

export class FightHandler {
    private _fighterTeam1: Character[] = [];
    private _fighterTeam2: Character[] = [];
    
    beforeAttack(){}
    
    attack() {}
    
    afterAttack() {}

    onHit() {}

    speedComparaison(team1: Character[], team2: Character[]) {
        
    }

    fight() {
        this.speedComparaison(this.fighterTeam1, this.fighterTeam2) 
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