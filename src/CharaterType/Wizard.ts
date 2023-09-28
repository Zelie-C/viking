import { Character } from "../Character/Character";
import { SpellBook } from "../SpellBook/SpellBook";
import { CharacterType } from "./CharacterType";

export class Wizard extends CharacterType {
    private static _typeName: string = "Wizard"
    private static _pvBonus: number = 5;
    private static _forceBonus: number  = 1;
    private static _speedBonus: number = 1;
    private static _intelligenceBonus: number = 5;
    private static _pmBonus: number = 45;
    private static _criticBonus: number = 0;
    private static _spellBook: SpellBook;

  
  

    constructor(){
        super(Wizard._typeName, Wizard._pvBonus, Wizard._forceBonus, Wizard._speedBonus, Wizard._intelligenceBonus, Wizard._pmBonus, Wizard._criticBonus)
        Wizard._spellBook = SpellBook;
    }

    override specialCapacityBeforeAttack(character: Character): number {
      if (character.pm < character.pmMax) {
        let pmRecuperation: number = character.intelligenceTotal/2
        character.pm += pmRecuperation;
        console.log(`${character} récupère ${pmRecuperation} points de mana`);
        return character.pm;
      } else {
        console.log(`${character} ne récupère pas de mana`);
        return character.pm
      }
    }

    public static get spellBook(): SpellBook {
      return Wizard._spellBook;
    }
    public static set spellBook(value: SpellBook) {
      Wizard._spellBook = value;
    }
    
}
