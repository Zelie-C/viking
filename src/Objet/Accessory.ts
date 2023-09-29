import { Equipable } from "./Equipable";

export abstract class Accessory extends Equipable {
    private static _intelligenceBonus: number;
    private static _speedBonus?: number | undefined;
    private static _shieldBonus?: number | undefined;

    constructor(name: string, price: number, weight: number, level: number, intelligenceBonus: number, speedBonus?: number, shieldBonus?: number){
        super(name, price, weight, level);
        Accessory._intelligenceBonus = intelligenceBonus;
        Accessory._speedBonus = speedBonus;
        Accessory._shieldBonus = shieldBonus;
    }
}