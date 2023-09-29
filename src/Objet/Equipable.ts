import { Character } from "../Character/Character";

export abstract class Equipable implements IObjet {
    private _name: string;
    private _price: number;
    private _weight: number;
    private _level: number;
    
    abstract equip(): any;

    use(character: Character): any {
        this.equip();
    };
    
    constructor(name: string, price: number, weight: number, level: number) {
        
        this._name = name;
        this._price = price;
        this._weight = weight;
        this._level = level;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public get level(): number {
        return this._level;
    }
    public set level(value: number) {
        this._level = value;
    }
}