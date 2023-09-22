import { Character } from "./Character/Character";

export class Combat{
    private _character1: Character;
    private _character2: Character;
    private _pvLevel: number[];

    constructor(character1: Character, character2: Character, pvLevel = [character1.pv, character2.pv]){
        this._character1 = character1;
        this._character2 = character2;
        this._pvLevel = pvLevel;

    }

    get character1(): Character {
        return this._character1;
    }
    
    set character1(newCharacter1: Character) {
        this._character1 = newCharacter1;
    }

    get character2(): Character {
        return this._character2;
    }
    
    set character2(newCharacter2: Character) {
        this._character1 = newCharacter2;
    }

    get pvLevel(): number[] {
        return this._pvLevel;
    }

    set pvLevel(newPvLevel: number[]) {
        this._pvLevel = newPvLevel;
    }


    public simuler(){
        let weakestCharacter: Character;
        let strongestCharacter: Character;

        if (this.character1.force > this.character2.force) {
            strongestCharacter = this.character1;
            weakestCharacter = this.character2;
        } else {
            weakestCharacter = this.character1;
            strongestCharacter = this.character2
        }

        while(weakestCharacter.pv > 0 && strongestCharacter.pv > 0){

            let attack = weakestCharacter.attack();
            let defense = strongestCharacter.takeDamage(attack);
            attack = strongestCharacter.attack();
            defense = weakestCharacter.takeDamage(attack)

        }

        return this.pvLevel

    }

    public getWinner() {
        if (this.pvLevel[0] > 0) {
          console.log(`${this.character1.nom} gagne`);
          return this.character1;
        } else {
          console.log(`${this.character2.nom} gagne`)
          return this.character2;
        }
    }

    public getLoser() {
        if (this.pvLevel[0] <= 0) {
            return this.character1;
        } else {
            return this.character2;
        }
    }

}
