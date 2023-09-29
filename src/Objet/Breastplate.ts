import { Armor } from "./Armor";

export class Breastplate extends Armor {
    private static _name = "Breastplate";
    private static _price = 50;
    private static _weight = 13;
    private static _level = 10;
    private static _shieldBonus = 9;
    private static _forceBonus = 3;
    private static _speedBonus = -2;

    constructor(){
        super(Breastplate._name, Breastplate._price, Breastplate._weight, Breastplate._level, Breastplate._shieldBonus, Breastplate._forceBonus, Breastplate._speedBonus) 
    }
    
    override equip() {
        throw new Error("Method not implemented.");
    }
    
}