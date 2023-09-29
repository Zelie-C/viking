export abstract class Equibable implements IObjet {
    private _name: string;
    private _price: number;
    private _weight: number;
    private _level: number

    constructor(name: string, price: number, weight: number, level: number) {
        this._name = name;
        this._price = price;
        this._weight = weight;
        this._level = level;
    }
    
    use: () => {};
}