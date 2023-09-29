import { Character } from "./Character/Character";
import { PlayerTeam } from "./Team/PlayerTeam";
import { Viking } from "./CharaterType/Viking";
import { Wizard } from "./CharaterType/Wizard";
import { NpcTeam } from "./Team/NpcTeam";
import { Potion } from "./Objet/Potion";
import { Axe } from "./Objet/Axe";

const lifePotion = new Potion("Potion de vie", 15, 0.5, 1, 100)
const axe = new Axe()
const Ragnar = new Character("Ragnar", new Viking, new PlayerTeam, [axe], [lifePotion])

Ragnar.consommable![0].use(Ragnar)

// const Lizard = new Character("Lizard", new Wizard, new NpcTeam)
// console.log(Lizard)

// const lameDeSang = new Arme("Lame de Sang", 4);
// const hache = new Arme("Hache", 8)

// const ragnar = new Character("Ragnar", 100, 15, 4, hache)

// const lagertha = new Character("Lagertha", 120, 16, 5, lameDeSang)

// const combat1 = new Combat(ragnar, lagertha);
// combat1.simuler();
// combat1.getWinner();
