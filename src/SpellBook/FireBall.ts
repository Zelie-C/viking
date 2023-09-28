import { Character } from "../Character/Character";
import { Spell } from "./Spell";

export class FireBall extends Spell {

  private static _name: string;

  constructor(){
    super(FireBall._name)
  }
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
