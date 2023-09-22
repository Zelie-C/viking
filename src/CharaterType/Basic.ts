import { CharacterType } from "./CharacterType";

export class Basic extends CharacterType {
    private static _typeName: string = "Basic";
    private static _pvBonus: number = 0;
    private static _forceBonus: number = 0;
    private static _speedBonus: number = 0;
    private static _intelligenceBonus: number = 0;
    private static _pmBonus: number = 0;
    private static _criticBonus: number = 0;

    constructor(){
        super(Basic._typeName, Basic._pvBonus, Basic._forceBonus, Basic._speedBonus, Basic._intelligenceBonus, Basic._pmBonus, Basic._criticBonus)
    }
}