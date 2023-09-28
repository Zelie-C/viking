import { FireBall } from "./FireBall";
import { MagicalHeal } from "./MagicalHeal";
import { MagicalProtection } from "./MagicalProtection";
import { Spell } from "./Spell";

export abstract class SpellBook {
    private _spells: Spell[] = [];

    constructor() {
      const availableSpells: Spell[] = [new FireBall(), new MagicalHeal(), new MagicalProtection()]
      const randomSpell = Math.floor(Math.random() * availableSpells.length)
      this._spells.push(availableSpells[randomSpell])
    }


}
