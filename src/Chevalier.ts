import { CharacterType } from "./CharacterType";

export class Chevalier extends CharacterType {
    private static _pvBonus: number;
    private static _forceBonus: number;
    private static _speedBonus: number;
    private static _intelligenceBonus: number;
    private static _pmBonus: number;
    private static _criticBonus: number;

    constructor(typeName: string){
        super(typeName, Chevalier._pvBonus, Chevalier._forceBonus, Chevalier._speedBonus, Chevalier._intelligenceBonus, Chevalier._pmBonus, Chevalier._criticBonus)
        Chevalier._pvBonus = 40;
        Chevalier._forceBonus = 5;
        Chevalier._speedBonus = 1;
        Chevalier._intelligenceBonus = 1;
        Chevalier._pmBonus = 5;
        Chevalier._criticBonus = 0.03;
    }

    // specialCapacity(attaqueValue: number): number {
        
    // }

}