import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    private static _name = "Sword";
    private static _price = 100;
    private static _weight = 12;
    private static _level = 3;
    private override _forceBonus: number = 5;
    override _speedBonus: number = 1;
    override _intelligenceBonus: number = 1;

    constructor(){
        super(Sword._name, Sword._price, Sword._weight, Sword._level, Sword.forceBonus, Sword._speedBonus, Sword.intelligenceBonus)
    }
}