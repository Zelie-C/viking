import { Viking } from "./Viking";

export class Combat{
    viking1: Viking;
    viking2: Viking;
    pvLevel: number[];

    constructor(viking1: Viking, viking2: Viking, pvLevel = [viking1.pv, viking2.pv]){
        this.viking1 = viking1;
        this.viking2 = viking2;
        this.pvLevel = pvLevel;

    }

    public simuler(){
        let weakestViking: Viking;
        let strongestViking: Viking;

        if (this.viking1.force > this.viking2.force) {
            strongestViking = this.viking1;
            weakestViking = this.viking2;
        } else {
            weakestViking = this.viking1;
            strongestViking = this.viking2
        }

        while(weakestViking.pv > 0 && strongestViking.pv > 0){

            let attack = weakestViking.attack();
            let defense = strongestViking.takeDamage(attack);
            attack = strongestViking.attack();
            defense = weakestViking.takeDamage(attack)

        }

        return this.pvLevel = [this.viking1.pv, this.viking2.pv]

    }

    public getWinner() {
        if (this.pvLevel[0] > 0) {
          console.log(`${this.viking1.nom} gagne`);
          return this.viking1;
        } else {
          console.log(`${this.viking2.nom} gagne`)
          return this.viking2;
        }
    }

    public getLoser() {
        if (this.pvLevel[0] <= 0) {
            return this.viking1;
        } else {
            return this.viking2;
        }
    }

}
