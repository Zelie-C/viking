import { CharacterType } from "./CharacterType";

export class Viking extends CharacterType {
    private static _typeName = "Viking"
    private static _pvBonus: number = 25;
    private static _forceBonus: number = 4;
    private static _speedBonus: number = 2;
    private static _intelligenceBonus: number = 0;
    private static _pmBonus: number = 0;
    private static _criticBonus: number = 0.08;



    constructor(){
        super(Viking._typeName, Viking._pvBonus, Viking._forceBonus, Viking._speedBonus, Viking._intelligenceBonus, Viking._pmBonus, Viking._criticBonus)
    }

    specialCapacityAfterAttack(attaqueValue: number): [number, number] {
        let restauredPv: number = 0
        let restauredPm: number = 0
            restauredPv = Math.floor(attaqueValue * 0.15)
            restauredPm = Math.floor(attaqueValue * 0.03)
        return [restauredPv, restauredPm]
    }

}
