import { Character } from "../Character/Character";
import { Spell } from "./Spell";

export class MagicalHeal extends Spell {

  private static _name: string;

  constructor(){
    super(MagicalHeal._name)
  }

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
