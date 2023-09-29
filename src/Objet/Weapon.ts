import { Equibable } from "./Equipable";

export abstract class Weapon extends Equibable {
    private _forceBonus: number;
    private _speedBonus?: number | undefined;
    private _intelligenceBonus?: number | undefined;
    

    constructor(name: string, price: number, weight: number, level: number, forceBonus: number, speedBonus: number, intelligenceBonus: number) {
        super(name, price, weight, level);
        this._forceBonus = forceBonus;
        this._speedBonus = speedBonus;
        this._intelligenceBonus = intelligenceBonus
    }

    public static get forceBonus(): number {
        return this.forceBonus;
    }
    public static set forceBonus(value: number) {
        this.forceBonus = value;
    }
    public static get speedBonus(): number | undefined {
        return this.speedBonus;
    }
    public static set speedBonus(value: number | undefined) {
        this.speedBonus = value;
    }
    public static get intelligenceBonus(): number | undefined {
        return this.intelligenceBonus;
    }
    public static set intelligenceBonus(value: number | undefined) {
        this.intelligenceBonus = value;
    }
}