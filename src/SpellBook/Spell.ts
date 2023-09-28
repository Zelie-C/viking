import { Character } from "../Character/Character";

export abstract class Spell {
  private _spellName: string;

  constructor(name: string){

    this._spellName = name;
  }

  public abstract cast(character: Character) : any;

  public abstract canCast(character: Character): boolean;

  public get spellName(): string {
    return this._spellName;
  }
  public set spellName(value: string) {
    this._spellName = value;
  }
}
