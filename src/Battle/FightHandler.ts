import { Character } from "../Character/Character";
import { FireBall } from "../SpellBook/FireBall";
import { MagicalHeal } from "../SpellBook/MagicalHeal";
import { MagicalProtection } from "../SpellBook/MagicalProtection";
import { NpcTeam } from "../Team/NpcTeam";
import { PlayerTeam } from "../Team/PlayerTeam";
import * as readline from 'readline';


export class FightHandler {
    private _playerTeam: PlayerTeam;
    private _npcTeam: NpcTeam;

    constructor(playerTeam: PlayerTeam, npcTeam: NpcTeam){
      this._playerTeam = playerTeam;
      this._npcTeam = npcTeam;
    }

    async oneFightRound() {
      let allCharacters = this.charactersSpeedComparaison(this.playerTeam, this.npcTeam);
      let attacker: Character | undefined
      let defender: Character | undefined;
      for (let i = 0; i < allCharacters.length; i++) {
        attacker = allCharacters.find((character: Character) => character.hasPlayed === false && !character.isDead());
      }

        switch (attacker?.team.teamName) {
          case "PlayerTeam" :
            const whichEnemy: string = 'Quel ennemi souhaitez-vous attaquer ?'
            const chosenEnemy = await this.userInterface(whichEnemy);
            defender = this.chooseEnemyByName(chosenEnemy);
            console.log(`${attacker} a choisi d'attaquer ${defender}`);
            this.fight(attacker, defender!);

            break;
          case "NpcTeam" :
            defender = allCharacters[Math.floor(Math.random() * this.playerTeam.composition.length)];
            console.log(`${attacker} se prépare à attaquer ${defender}`);
            this.fight(attacker, defender)
          default:
            console.log("Aucun attaquant n'a été trouvé.");
        }

    }

    beforeAttack(attacker: Character) {
      switch (attacker.characterType.typeName) {
        case "Archer":
          attacker.characterType.specialCapacityBeforeAttack(attacker);
          break;
        case "Wizard":
          attacker.characterType.specialCapacityBeforeAttack(attacker);
        default:
          console.log(`${attacker} n'a pas de capacité spéciale avant l'attaque`)
      }
    }

    hit(attacker: Character) {
      if (Math.random() < attacker.criticTotal) {
        return attacker.forceTotal * 2
      } else {
        return attacker.forceTotal;
      }

    }

    attack(attacker: Character) {
      let damage = this.hit(attacker);
      switch (attacker.characterType.typeName) {
        case "Thief":
          return attacker.characterType.specialCapacity(damage, attacker);
        case "Viking":
          return damage = attacker.characterType.specialCapacity(damage, attacker);
        case "Wizard":
          attacker.hasPlayed = true;
          if (attacker.pm > attacker.pmMax * 0.55) {
            return new FireBall().cast(attacker);
          } else if (attacker.pv = attacker.pvMax * 0.25) {
              return new MagicalHeal().cast(attacker);
          } else if (attacker.latestDamage >= attacker.pvMax * 0.15) {
              return new MagicalProtection().cast(attacker);
          } else {
              return damage;
          }
        default:
          attacker.hasPlayed = true;
          return damage;
      }
    }

    fight(attacker: Character, defender: Character)  {
      this.beforeAttack(attacker);
      let damage: number = this.attack(attacker)!;
      this.onHit(damage, defender);
    }

    onHit(attackValue: number, defender: Character) {
      switch (defender.characterType.typeName) {
        case "Knight":
          return defender.characterType.specialCapacityAfterAttack(attackValue, defender);
        case "Wizard":
          if (defender.characterType.hasMagicalShield === true) {
            defender.characterType.magicalShield -= attackValue;
            if (defender.characterType.magicalShield <= 0) {
              let value: number = Math.abs(defender.characterType.magicalShield);
              attackValue = value;
              defender.characterType.magicalShield = 0;
              defender.characterType.hasMagicalShield = false;
              defender.pv -= attackValue;
              defender.latestDamage = attackValue;
              return defender.pv
            } else {
              defender.pv -= attackValue;
            }
          }
        default:
          console.log(`${defender} perd ${attackValue} points de vie`);
          defender.latestDamage = attackValue;
          return defender.pv -= attackValue;
      }
    }


    charactersSpeedComparaison(team1: PlayerTeam, team2: NpcTeam) {
      let charactersSortedBySpeed: Character[] = team1.composition.concat(team2.composition);
      charactersSortedBySpeed.sort((a, b) => a.speed - b.speed)
      return charactersSortedBySpeed;
    }

    chooseEnemyByName(name : string): Character | undefined {
      const target = this.npcTeam.composition.find((enemy) => enemy.name === name);
      if (target) {
        return target;
      } else {
        console.log(`Vous ne pouvez pas attaquer ${name}`);
        return undefined;
      }
    }

    async userInterface(question: string): Promise<string> {
      return new Promise<string>((resolve) => {
          const rl = readline.createInterface({
              input: process.stdin,
              output: process.stdout,
          });

          rl.question(question, (response: string) => {
              rl.close();
              resolve(response);
          });
      });
    }

    public get playerTeam(): PlayerTeam {
        return this._playerTeam;
    }
    public set playerTeam(value: PlayerTeam) {
        this._playerTeam = value;
    }
    public get npcTeam(): NpcTeam {
        return this._npcTeam;
    }
    public set npcTeam(value: NpcTeam) {
        this._npcTeam = value;
    }
}
