import { Character } from "../Character/Character";
import { Spell } from "./Spell";

export class MagicalProtection extends Spell {

  private static _name: string;

  constructor(){
    super(MagicalProtection._name)
  }

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
