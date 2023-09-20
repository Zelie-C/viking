import { Viking } from "./Viking";
import { Arme } from "./Arme";
import { Combat } from "./Combat";


const lameDeSang = new Arme("Lame de Sang", 4);
const hache = new Arme("Hache", 8)

const ragnar = new Viking("Ragnar", 100, 15, 4, hache)

const lagertha = new Viking("Lagertha", 120, 20, 5, lameDeSang)

const combat1 = new Combat(ragnar, lagertha);
combat1.simuler();
combat1.getWinner();
