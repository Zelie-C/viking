import { Equipable } from "./Equipable";

export abstract class Weapon extends Equipable {
    private _forceBonus: number;
    private _speedBonus?: number | undefined;
    private _intelligenceBonus?: number | undefined;


    constructor(name: string, price: number, weight: number, level: number, forceBonus: number, speedBonus: number, intelligenceBonus: number) {
        super(name, price, weight, level);
        this._forceBonus = forceBonus;
        this._speedBonus = speedBonus;
        this._intelligenceBonus = intelligenceBonus
    }

    public get forceBonus(): number {
        return this._forceBonus;
    }
    public set forceBonus(value: number) {
        this._forceBonus = value;
    }
    public get speedBonus(): number | undefined {
        return this._speedBonus;
    }
    public set speedBonus(value: number | undefined) {
        this._speedBonus = value;
    }
    public get intelligenceBonus(): number | undefined {
        return this._intelligenceBonus;
    }
    public set intelligenceBonus(value: number | undefined) {
        this._intelligenceBonus = value;
    }
}
