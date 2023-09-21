import { CharacterType } from "./CharacterType";

export class Archer extends CharacterType {
    private static _pvBonus: number;
    private static _forceBonus: number;
    private static _speedBonus: number;
    private static _intelligenceBonus: number;
    private static _pmBonus: number;
    private static _criticBonus: number;

    constructor(typeName: string){
        super(typeName, Archer._pvBonus, Archer._forceBonus, Archer._speedBonus, Archer._intelligenceBonus, Archer._pmBonus, Archer._criticBonus)
        Archer._pvBonus = 15;
        Archer._forceBonus = 2;
        Archer._speedBonus = 3;
        Archer._intelligenceBonus = 1;
        Archer._pmBonus = 10;
        Archer._criticBonus = 0.05;
    }

    // specialCapacity(attaqueValue: number): number {
        
    // }

}