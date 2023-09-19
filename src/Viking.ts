import { Arme } from "./Arme";

export class Viking {
    nom: string;
    pv: number;
    force: number;
    arme: Arme;

    constructor(nom: string, pv: number, force: number, arme: Arme){
        this.nom = nom;
        this.pv = pv;
        this.force = force;
        this.arme = arme;
    }
}