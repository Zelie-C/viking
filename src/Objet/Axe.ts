import { Weapon } from "./Weapon";

export class Axe extends Weapon {
    private static _name = "Axe";
    private static _price = 70;
    private static _weight = 15;
    private static _level = 4;
    private static _forceBonus = 10;
    private static _speedBonus = -2;
    private static _intelligenceBonus = -1;
    
    constructor(){
        super(Axe._name, Axe._price, Axe._weight, Axe._level, Axe._forceBonus, Axe._speedBonus, Axe._intelligenceBonus) 
    }

    override equip() {
        throw new Error("Method not implemented.");
    }
}