import { Character } from "../Character/Character";

interface IObjet {
    name: string;
    price: number;
    weight: number;
    
    use: (character: Character) => {};
}