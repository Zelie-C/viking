import { Character } from "../Character/Character";
import { CharacterType } from "./CharacterType";

export class Archer extends CharacterType {
    private static _typeName: string = "Archer"
    private static _pvBonus: number = 15;
    private static _forceBonus: number = 2;
    private static _speedBonus: number = 3;
    private static _intelligenceBonus: number = 1;
    private static _pmBonus: number = 10;
    private static _criticBonus: number = 0.05;

    constructor(){
        super(Archer._typeName, Archer._pvBonus, Archer._forceBonus, Archer._speedBonus, Archer._intelligenceBonus, Archer._pmBonus, Archer._criticBonus)
    }

    override specialCapacityBeforeAttack(character: Character): number {
        let trap = character.forceTotal * 2.5;
        return trap
    }
}
