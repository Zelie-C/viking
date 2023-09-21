export class CharacterType {
    private _typeName: string
    private _pvBonus: number;
    private _forceBonus: number;
    private _speedBonus: number;
    private _intelligenceBonus: number;
    private _pmBonus: number;
    private _criticBonus: number;


    constructor(typeName: string, vieB : number, forceB: number, speedB: number, intelB: number, pmB: number, critB: number) {
        this._typeName = typeName;
        this._pvBonus = vieB;
        this._forceBonus = forceB;
        this._speedBonus = speedB;
        this._intelligenceBonus = intelB;
        this._pmBonus = pmB;
        this._criticBonus = critB;
    }

    
    specialCapacity(attackValue: number) {
        
    }
    
    public get typeName(): string {
        return this._typeName
    }
    public set typeName(newTypeName: string){
        this._typeName = newTypeName;
    }
    public get viebonus(): number {
        return this._pvBonus;
    }
    public set viebonus(value: number) {
        this._pvBonus = value;
    }
    public get forceBonus(): number {
        return this._forceBonus;
    }
    public set forceBonus(value: number) {
        this._forceBonus = value;
    }
    public get speedBonus(): number {
        return this._speedBonus;
    }
    public set speedBonus(value: number) {
        this._speedBonus = value;
    }
    public get intelligenceBonus(): number {
        return this._intelligenceBonus;
    }
    public set intelligenceBonus(value: number) {
        this._intelligenceBonus = value;
    }
    public get pmBonus(): number {
        return this._pmBonus;
    }
    public set pmBonus(value: number) {
        this._pmBonus = value;
    }
    public get criticBonus(): number {
        return this._criticBonus;
    }
    public set criticBonus(value: number) {
        this._criticBonus = value;
    }
}