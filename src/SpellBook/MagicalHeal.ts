import { Character } from "../Character/Character";
import { Spells } from "./Spells";

export class MagicalHeal extends Spells {
    public override cast(character: Character){
        if (this.canCast(character) === true) {
            character.pm -= 20;
            return character.pv += character.intelligenceTotal * 0.75;
        }
    }

    public override canCast(character: Character) {
        if (character.pm >= 20) {
            return true
        } else {
            return false
        }
    }
}