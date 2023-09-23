import { CharacterType } from "../CharaterType/CharacterType";
import { Basic } from "../CharaterType/Basic";
import { Team } from "../Team";

export class Character {
    private _name: string;
    private _level: number;
    private _exp: number;
    private _characterType: CharacterType;
    private _pv: number;
    private _force: number;
    private _speed: number;
    private _intelligence: number;
    private _pm: number;
    private _critic: number;
    private _team: Team | null;

    constructor(name: string){
        this._name = name;
        this._level = 1;
        this._exp = 0;
        this._pv = 50;
        this._characterType = new Basic;
        this._force = 10;
        this._speed = 10;
        this._intelligence = 10
        this._pm = 50;
        this._critic = 0.02;
        this.
    }

    get name(): string{
      return this._name;
    }

    set name(newName: string) {
      this._name = newName;
    }

    get level(): number{
      return this._level;
    }

    set level(newLevel: number) {
      this._level = newLevel;
    }

    get exp(): number{
      return this._exp;
    }

    set exp(newExp: number) {
      this._exp = newExp;
    }

    get characterType(): CharacterType{
      return this._characterType;
    }

    set characterType(newCharacterType: CharacterType) {
      this._characterType = newCharacterType;
    }

    get pv(): number{
      return this._pv + this._characterType.viebonus;
    }

    set pv(newPv: number) {
      this._pv = newPv;
    }

    get force(): number {
      return this._force + this.characterType.forceBonus;
    }

    set force(newForce: number) {
      this._force = newForce;
    }

    get speed(): number {
      return this._speed + this.characterType.speedBonus;
    }

    set speed(newSpeed: number) {
      this._speed = newSpeed;
    }

    get intelligence(): number {
      return this._intelligence + this.characterType.intelligenceBonus;
    }

    set intelligence(newIntelligence: number) {
      this._intelligence = newIntelligence;
    }

    get pm(): number {
      return this._pm + this.characterType.pmBonus;
    }

    set pm(newPm: number) {
      this._pm = newPm;
    }

    get critic(): number {
      return this._critic + this.characterType.criticBonus;
    }

    set critic(newCritic: number) {
      this._critic = newCritic;
    }

  }
  //     public attack(): number {
  //       let damage: number;
  //       let coupCritique = Math.random();
  //       if (coupCritique < 0.1) {
  //         damage = this.force *2;
  //         console.log(`${this.nom} fait un coup critique et inflige ${damage} de dégats`)
  //       } else {
  //         damage = this.force
  //         console.log(`${this.nom} inflige ${damage} de dégats`)
  //       }
  //       if (this.arme.possedeVolDeVie() && this.pv < this.pvMax){
  //         let stealedPv = Math.trunc((this.force) * 0.13);
  //         if (this.pv + stealedPv > this.pvMax) {
  //           console.log(`${this.nom} récupère tous ses points de vie`)
  //           this.pv += this.pvMax
  //         } else {
  //           this.pv += this.pv + stealedPv
  //           console.log(`${this.nom} récupère ${stealedPv} points de vie`)
  //         }
  //       } else if (this.arme.possedeVolDeVie() && this.pv === this.pvMax) {
  //         console.log(`${this.nom} ne récupère pas de vie`)
  //       }
  //     return damage;
  //   }

  //   public takeDamage(damage: number) {
  //     console.log(`${this.nom} perd ${damage - this.defense} points de vie`)
  //     return this.pv -= damage - this.defense;
  //   }
