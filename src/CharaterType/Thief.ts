import { Character } from "../Character/Character";
import { CharacterType } from "./CharacterType";


export class Thief extends CharacterType {
  private static _typeName: string = "Thief"
  private static _pvBonus: number = 15;
  private static _forceBonus: number = 2;
  private static _speedBonus: number = 5;
  private static _intelligenceBonus: number = 1;
  private static _pmBonus: number = 10;
  private static _criticBonus: number = 0.13;

  constructor(){
      super(Thief._typeName, Thief._pvBonus, Thief._forceBonus, Thief._speedBonus, Thief._intelligenceBonus, Thief._pmBonus, Thief._criticBonus)
  }

  specialCapacity(force: number, thief: Character): number[]{
    force = thief.forceTotal * 2.5;
    return [force, thief.forceTotal];
  }
}
