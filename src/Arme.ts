export class Arme{
    nom: string;
    force: number;

    constructor(nom: string, force: number) {
        this.nom = nom;
        this.force = force;
    }

    public possedeVolDeVie() {
        if (this.nom === "Lame de Sang"){
            return true;
        } else {
            return false;
        }
    }
}