export class Arme{
    private _nom: string;
    private _force: number;

    constructor(nom: string, force: number) {
        this._nom = nom;
        this._force = force;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(newName: string) {
        this._nom = newName;
    }
    
    get force() {
        return this._force;
    }

    set force(newForce: number) {
        this._force = newForce;
    }

    public possedeVolDeVie() {
        if (this.nom === "Lame de Sang"){
            return true;
        } else {
            return false;
        }
    }
}