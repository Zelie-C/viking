import { Arme } from "./Arme";

export class Viking {
    nom: string;
    pv: number;
    private _pvMax: number;
    private _force: number;
    private _defense: number;
    arme: Arme;

    constructor(nom: string, pv: number, force: number, defense: number, arme: Arme){
        this.nom = nom;
        this.pv = pv;
        this._pvMax = pv
        this._force = force;
        this._defense = defense
        this.arme = arme;
    }

    public get force(): number {
      return this._force + this.arme.force;
    }

    public get defense(): number {
      return this._defense;
    }

    public get pvMax(): number {
      return this._pvMax;
    }

    public attack(): number {
      let damage: number;
      let coupCritique = Math.random();
      if (coupCritique < 0.1) {
        damage = this.force *2;
        console.log(`${this.nom} fait un coup critique et inflige ${damage} de dégats`)
      } else {
        damage = this.force
        console.log(`${this.nom} inflige ${damage} de dégats`)
      }
      if (this.arme.possedeVolDeVie() && this.pv < this.pvMax){
        let stealedPv = Math.trunc((this.force) * 0.13);
        if (this.pv + stealedPv > this.pvMax) {
          console.log(`${this.nom} récupère tous ses points de vie`)
          this.pv += this.pvMax
        } else {
          this.pv += this.pv + stealedPv
          console.log(`${this.nom} récupère ${stealedPv} points de vie`)
        }
      } else if (this.arme.possedeVolDeVie() && this.pv === this.pvMax) {
        console.log(`${this.nom} ne récupère pas de vie`)
      }
    return damage;
  }

  public takeDamage(damage: number) {
    console.log(`${this.nom} perd ${damage - this.defense} points de vie`)
    return this.pv -= damage - this.defense;
  }
}
