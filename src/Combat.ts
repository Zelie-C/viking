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

    public combattre(){
        let weakestViking: Viking;
        let strongestViking: Viking;
        
        let totalForceV1: number = this.viking1.force + this.viking1.arme.force;
        let totalForceV2: number = this.viking2.force + this.viking2.arme.force;

        if (totalForceV1 > totalForceV2) {
            strongestViking = this.viking1;
            weakestViking = this.viking2;
        } else {
            weakestViking = this.viking1;
            strongestViking = this.viking2
        }
        
        let vikingWeakestToAttack = true
        while(this.viking1.pv > 0 && this.viking2.pv > 0){

            if (Math.floor(Math.random() * 100) > 10) {
                if(vikingWeakestToAttack){
                    strongestViking.pv -= weakestViking.force;
                }
                else {
                    weakestViking.pv -= strongestViking.force;
                }
            } else {
                if(vikingWeakestToAttack){
                    strongestViking.pv -= weakestViking.force *2;
                } else {
                    weakestViking.pv -= strongestViking.force *2;
                }
            }
            vikingWeakestToAttack = !vikingWeakestToAttack
        }

        this.pvLevel = [this.viking1.pv, this.viking2.pv]

    }

    public getWinner() {
        if (this.pvLevel[0] > 0) {
            return this.viking1;
        } else {
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