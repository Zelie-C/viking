import { CharacterType } from "../CharaterType/CharacterType";
import { Basic } from "../CharaterType/Basic";
import { Team } from "../Team/Team";

export class Character {
    private _name: string = "";
    private _level: number = 1;
    private _exp: number = 0;
    private _characterType: CharacterType;
    private _pvMax: number = 50;
    private _pv: number = 50;
    private _force: number = 10;
    private _speed: number = 10;
    private _intelligence: number = 10;
    private _pm: number = 50;
    private _critic: number = 0.02;
    private _team: Team;


    constructor(name: string, type: CharacterType, team: Team){
        this._name = name;
        this._characterType = type;
        this._level = this.level;
        this._exp = this.exp;
        this._pvMax = this._pvMax + this.characterType.healthBonus;
        this._pv = this.pvMax;
        this._characterType = new Basic();
        this._force = this.force + this.characterType.forceBonus;
        this._speed = this.force + this.characterType.speedBonus;
        this._intelligence = this.intelligence + this.characterType.intelligenceBonus;
        this._pm = this.pm + this.characterType.pmBonus;
        this._critic = this.critic + this.characterType.criticBonus;
        this._team = team;
    }

    specialCapacityBeforeAttack(){

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
      return this._pv;
    }

    set pv(newPv: number) {
      this._pv = newPv;
    }

    public get pvMax(): number {
      return this._pvMax;
    }

    public set pvMax(value: number) {
      this._pvMax = value;
    }

    get force(): number {
      return this._force;
    }

    set force(newForce: number) {
      this._force = newForce;
    }

    get speed(): number {
      return this._speed;
    }

    set speed(newSpeed: number) {
      this._speed = newSpeed;
    }

    get intelligence(): number {
      return this._intelligence;
    }

    set intelligence(newIntelligence: number) {
      this._intelligence = newIntelligence;
    }

    get pm(): number {
      return this._pm;
    }

    set pm(newPm: number){
      this._pm = newPm;
    }

    get critic(): number {
      return this._critic;
    }

    set critic(newCritic: number) {
      this._critic = newCritic;
    }

    public get team(): Team {
      return this._team;
    }
    public set team(value: Team) {
      this._team = value;
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
