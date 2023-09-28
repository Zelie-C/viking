import { CharacterType } from "../CharaterType/CharacterType";
import { Team } from "../Team/Team";

export class Character {
    private _name: string;
    private _level: number;
    private _exp: number;
    private _characterType: CharacterType;
    private _pv: number;
    private _pvMax: number;
    private _force: number;
    private _speed: number;
    private _intelligence: number;
    private _pm: number;
    private _pmMax: number;
    private _critic: number;
    private _team: Team;
    private _hasPlayed: boolean;
    private _latestDamage: number;
  


    constructor(name: string, characterType: CharacterType, team: Team){
        this._name = name;
        this._level = 1;
        this._exp = 0;
        this._pvMax = 50 + this.characterType.healthBonus;
        this._pv = this.pvMax + this.characterType.healthBonus;
        this._characterType = characterType;
        this._force = 10;
        this._speed = 10;
        this._intelligence = 10
        this._pm = 50;
        this._pmMax = 50 + this.characterType.pmBonus;
        this._critic = 0.02;
        this._team = team;
        this._hasPlayed = false;
        this._latestDamage = 0;
    }

    isDead(): boolean {
      if (this.pv <= 0) {
        return true;
      } else {
        return false;
      }
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

    get forceTotal(): number {
      return this._force + this.characterType.forceBonus;
    }

    get speed(): number {
      return this._speed;
    }

    set speed(newSpeed: number) {
      this._speed = newSpeed;
    }

    get totalSpeed(): number {
      return this._speed + this.characterType.speedBonus;
    }

    get intelligence(): number {
      return this._intelligence;
    }

    set intelligence(newIntelligence: number) {
      this._intelligence = newIntelligence;
    }

    get intelligenceTotal(): number {
      return this._intelligence + this.characterType.intelligenceBonus;
    }

    get pm(): number {
      return this._pm;
    }

    set pm(newPm: number){
      this._pm = newPm;
    }

    public get pmMax(): number {
      return this._pmMax;
    }
    public set pmMax(value: number) {
      this._pmMax = value;
    }

    get critic(): number {
      return this._critic;
    }

    set critic(newCritic: number) {
      this._critic = newCritic;
    }

    get criticTotal(): number {
      return this._critic + this.characterType.criticBonus;
    }
    public get team(): Team {
      return this._team;
    }
    public set team(value: Team) {
      this._team = value;
    }
    public get hasPlayed(): boolean {
      return this._hasPlayed;
    }
    public set hasPlayed(value: boolean) {
      this._hasPlayed = value;
    }
    public get latestDamage(): number {
      return this._latestDamage;
    }
    public set latestDamage(value: number) {
      this._latestDamage = value;
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
