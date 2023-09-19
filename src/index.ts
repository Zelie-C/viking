import { Viking } from "./Viking";
import { Arme } from "./Arme";
import { Combat } from "./Combat";


const lameDeSang = new Arme("Lame de Sang", 15);
const masse = new Arme("Masse", 25)

const Ragnar = new Viking("Ragnar", 100, 50, masse)

const Lagertha = new Viking("Lagertha", 120, 60, lameDeSang)

const Combat1 = new Combat(Ragnar, Lagertha)
