import { Equipable } from "./Equipable"

export abstract class Armor extends Equipable {
    private _shieldBonus: number;
    private _forceBonus?: number | undefined;
    private _speedBonus?: number | undefined;
    private _intelligenceBonus?: number | undefined;
    

    constructor(name: string, price: number, weight: number, level: number, shieldBonus: number, forceBonus?: number, speedBonus?: number, intelligenceBonus?: number){
        super(name, price, weight, level)
        this._shieldBonus = shieldBonus;
        this._forceBonus = forceBonus;
        this._speedBonus = speedBonus;
        this._intelligenceBonus = intelligenceBonus;
    }

    public get shieldBonus(): number {
        return this._shieldBonus;
    }
    public set shieldBonus(value: number) {
        this._shieldBonus = value;
    }
    public get forceBonus(): number | undefined {
        return this._forceBonus;
    }
    public set forceBonus(value: number | undefined) {
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