import { Character } from "./Character/Character";
import { PlayerTeam } from "./Team/PlayerTeam";
import { Viking } from "./CharaterType/Viking";
import { Potion } from "./Objet/Potion";
import { Axe } from "./Objet/Axe";


const lifePotion = new Potion("potion de vie", 15, 0.5, 1, 100)
const axe = new Axe()
const Ragnar = new Character("Ragnar", new Viking(), new PlayerTeam(), [axe], [lifePotion])
console.log(Ragnar.pvTotal)
console.log(Ragnar.equipementForce)
Ragnar.consommable![0].use(Ragnar)
