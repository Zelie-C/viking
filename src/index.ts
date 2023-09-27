import { Character } from "./Character/Character";
import { Arme } from "./Arme";
import { Combat } from "./Combat";
import { FightHandler } from "./Battle/FightHandler";
import * as readline from 'readline';
import { PlayerTeam } from "./Team/PlayerTeam";
import { Viking } from "./CharaterType/Viking";
import { Wizard } from "./CharaterType/Wizard";
import { NpcTeam } from "./Team/NpcTeam";

const Ragnar = new Character("Ragnar", new Viking, new PlayerTeam)

const Lizard = new Character("Lizard", new Wizard, new NpcTeam)
console.log(Lizard)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

rl.question('Choose an enemy :', (type: string) => {

})

// const lameDeSang = new Arme("Lame de Sang", 4);
// const hache = new Arme("Hache", 8)

// const ragnar = new Character("Ragnar", 100, 15, 4, hache)

// const lagertha = new Character("Lagertha", 120, 16, 5, lameDeSang)

// const combat1 = new Combat(ragnar, lagertha);
// combat1.simuler();
// combat1.getWinner();
