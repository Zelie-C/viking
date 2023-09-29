export abstract class Consommable implements IObjet {
    private _name: string;
    private _price: number;
    private _weight: number;
    

    constructor(name: string, price: number, weight: number) {
        this._name = name;
        this._price = price;
        this._weight = weight;
    }

    use: () => {
        
    };

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
}