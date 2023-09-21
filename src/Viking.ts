import { CharacterType } from "./CharacterType";

export class Viking extends CharacterType {
    private static _pvBonus: number;
    private static _forceBonus: number;
    private static _speedBonus: number;
    private static _intelligenceBonus: number;
    private static _pmBonus: number;
    private static _criticBonus: number;



    constructor(typeName: string){
        super(typeName, Viking._pvBonus, Viking._forceBonus, Viking._speedBonus, Viking._intelligenceBonus, Viking._pmBonus, Viking._criticBonus)
        Viking._pvBonus = 25;
        Viking._forceBonus = 4;
        Viking._speedBonus = 2;
        Viking._intelligenceBonus = 0;
        Viking._pmBonus = 0;
        Viking._criticBonus = 0.08;
    }

    specialCapacity(attaqueValue: number): [number, number] {
        let restauredPv: number = 0
        let restauredPm: number = 0
            restauredPv = Math.floor(attaqueValue * 0.15)
            restauredPm = Math.floor(attaqueValue * 0.03)
        return [restauredPv, restauredPm]
    }

}
