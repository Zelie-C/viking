import { Armor } from "./Armor";

export class Gauntlet extends Armor {
    private static _name = "Gauntlet";
    private static _price = 30;
    private static _weight = 4;
    private static _level = 7;
    private static _shieldBonus = 4;
    private static _speedBonus = 3;
    private static _intelligenceBonus = 1;

    constructor(){
        super(Gauntlet._name, Gauntlet._price, Gauntlet._weight, Gauntlet._level, Gauntlet._shieldBonus, Gauntlet._speedBonus, Gauntlet._intelligenceBonus) 
    }
    
    override equip() {
        throw new Error("Method not implemented.");
    }
    
}