import { CharacterType } from "./CharacterType";

export class Magicien extends CharacterType {
    private static _pvBonus: number;
    private static _forceBonus: number;
    private static _speedBonus: number;
    private static _intelligenceBonus: number;
    private static _pmBonus: number;
    private static _criticBonus: number;

    constructor(typeName: string){
        super(typeName, Magicien._pvBonus, Magicien._forceBonus, Magicien._speedBonus, Magicien._intelligenceBonus, Magicien._pmBonus, Magicien._criticBonus)
        Magicien._pvBonus = 5;
        Magicien._forceBonus = 1;
        Magicien._speedBonus = 1;
        Magicien._intelligenceBonus = 5;
        Magicien._pmBonus = 45;
        Magicien._criticBonus = 0;
    }

    // specialCapacity(attaqueValue: number): number {
        
    // }


}