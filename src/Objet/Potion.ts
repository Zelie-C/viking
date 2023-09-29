import { Character } from "../Character/Character";
import { Consommable } from "./Consommable";

export class Potion extends Consommable {
    private _effect: potionEffect;
    private _power: potionPower;


    constructor(name: string, price: number, weight: number, effect: potionEffect, power: potionPower){
        super(name, price, weight)
        this._effect = effect;
        this._power = power;
    }

    override use(character: Character){
        super.use(character)
    }
    override consume(character: Character) {
        switch (this.effect){
            case 0:
                character.pm *= this.power;
                console.log(`${character.name} utilise une ${this.name} et récupère ${this.power} points de mana`)
                break;
            case 1:
                character.pv *= this.power;
                console.log(`${character.name} utilise ${this.name} et récupère ${this.power} points de vie`);
                break;
            default:
                console.log("Aucun potion n'a été consommée")
        }

    }

    public get effect(): potionEffect {
        return this._effect;
    }
    public set effect(value: potionEffect) {
        this._effect = value;
    }
    public get power(): potionPower {
        return this._power;
    }
    public set power(value: potionPower) {
        this._power = value;
    }

}

export enum potionEffect{
    mana,
    life
}

export enum potionPower {
    feeble = 10,
    medium = 45,
    strong = 100
}
