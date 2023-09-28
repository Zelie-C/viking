import { Character } from "../Character/Character";
import { Spells } from "./Spells";

export class MagicalProtection extends Spells {
    public override cast(character: Character){
        if (this.canCast(character) === true) {
            let pmCost: number = character.pm * 0.3;
            character.characterType.hasMagicalShield === true;
            character.characterType.magicalShield = pmCost;
            character.pm -= pmCost; 
        }
    }

    public override canCast(character: Character) {
        if (character.latestDamage >= character.pvMax * 0.15) {
            return true
        } else {
            return false
        }
    }
}