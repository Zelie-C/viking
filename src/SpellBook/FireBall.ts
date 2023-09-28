import { Character } from "../Character/Character";
import { Spells } from "./Spells";

export class FireBall extends Spells {
    public override cast(character: Character){
        if (this.canCast(character) === true) {
            character.pm -= 35;
            let magicalDamage: number = character.intelligenceTotal * 1.75;
            return magicalDamage
        }
    }

    public override canCast(character: Character) {
        if (character.pm >= 35) {
            return true
        } else {
            return false
        }
    }
}