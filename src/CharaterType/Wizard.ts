import { Character } from "../Character/Character";
import { CharacterType } from "./CharacterType";

export class Wizard extends CharacterType {
    private static _typeName: string = "Wizard"
    private static _pvBonus: number = 5;
    private static _forceBonus: number  = 1;
    private static _speedBonus: number = 1;
    private static _intelligenceBonus: number = 5;
    private static _pmBonus: number = 45;
    private static _criticBonus: number = 0;

    constructor(){
        super(Wizard._typeName, Wizard._pvBonus, Wizard._forceBonus, Wizard._speedBonus, Wizard._intelligenceBonus, Wizard._pmBonus, Wizard._criticBonus)
    }

    specialCapacity(character: Character) {
      let pmRecuperation: number = character.intelligenceTotal/2
      pmRecuperation = character.pm(pmRecuperation);
    }


}
