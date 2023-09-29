import { Character } from "../Character/Character";
import { FireBall } from "./FireBall";
import { MagicalHeal } from "./MagicalHeal";
import { MagicalProtection } from "./MagicalProtection";
import { Spell } from "./Spell";

export class SpellBook {
    private _spells: Spell[] = [];
  

    constructor() {
      const availableSpells: Spell[] = [new FireBall(), new MagicalHeal(), new MagicalProtection()]
      const randomSpell = Math.floor(Math.random() * availableSpells.length)
      this._spells.push(availableSpells[randomSpell])
    }

    public castableSpells(character : Character) : boolean[] {
      let castableSpell : boolean[] =[]
      this.spells.forEach((spell) => castableSpell.push(spell.canCast(character))        
      );

      return castableSpell;
  }

  addSpell(spell: Spell){
    this.spells.push(spell)
  }

  getSpellByName(name: string): Spell | undefined {
    return this.spells.find((spell) => spell.spellName === name);
  }

  public get spells(): Spell[] {
    return this._spells;
  }
  public set spells(value: Spell[]) {
    this._spells = value;
  }
}
