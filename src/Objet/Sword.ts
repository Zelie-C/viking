import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    private static _name = "Sword";
    private static _price = 100;
    private static _weight = 12;
    private static _level = 5;
    private static _forceBonus = 5;
    private static _speedBonus = 1;
    private static _intelligenceBonus = 1;
    
    constructor(){
        super(Sword._name, Sword._price, Sword._weight, Sword._level, Sword._forceBonus, Sword._speedBonus, Sword._intelligenceBonus) 
    }

    override equip() {
        throw new Error("Method not implemented.");
    }
}