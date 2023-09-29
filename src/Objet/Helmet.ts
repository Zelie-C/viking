import { Armor } from "./Armor";

export class Helmet extends Armor {
    private static _name = "Helmet";
    private static _price = 25;
    private static _weight = 7;
    private static _level = 2;
    private static _shieldBonus = 8;
    private static _intelligenceBonus = 2;

    constructor(){
        super(Helmet._name, Helmet._price, Helmet._weight, Helmet._level, Helmet._shieldBonus, Helmet._intelligenceBonus) 
    }
    
    override equip() {
        throw new Error("Method not implemented.");
    }
    
}