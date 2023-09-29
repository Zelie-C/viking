import { Character } from "../Character/Character";

export interface IObjet {
    name: string;
    price: number;
    weight: number;
    
    use: (character: Character) => {};
}