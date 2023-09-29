import { Equipable } from "./Equipable"

export abstract class Armor extends Equipable {
    private static _shieldBonus: number;
    private static _forceBonus?: number;
    private static _speedBonus?: number | undefined;
    private static _intelligenceBonus?: number | undefined;

    constructor(name: string, price: number, weight: number, level: number, shieldBonus: number, forceBonus?: number, speedBonus?: number, intelligenceBonus?: number){
        super(name, price, weight, level)
        Armor._shieldBonus = shieldBonus;
        Armor._forceBonus = forceBonus;
        Armor._speedBonus = speedBonus;
        Armor._intelligenceBonus = intelligenceBonus;
    }
}