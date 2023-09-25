import { CharacterType } from "./CharacterType";

export class Knight extends CharacterType {
    private static _typeName: string = "Knight"
    private static _pvBonus: number = 40;
    private static _forceBonus: number = 5;
    private static _speedBonus: number = 1;
    private static _intelligenceBonus: number = 1;
    private static _pmBonus: number = 5;
    private static _criticBonus: number = 0.03;

    constructor(){
        super(Knight._typeName, Knight._pvBonus, Knight._forceBonus, Knight._speedBonus, Knight._intelligenceBonus, Knight._pmBonus, Knight._criticBonus)
    }

    specialCapacityAfterAttack(attackDamage: number): number {
      let reduceDamage = attackDamage * 0.75;
      return reduceDamage;
    }
}
