import { ILuggageRule, ILuggage } from './types'

export default class LuggageProcessor {
    bags: ILuggage[] = [];
    constructor(rules: ILuggageRule[]) {
        rules.forEach(rule => {
            this.bags.push({
                name: rule.bagName,
                capacity: rule.capacity.map(rc => ({
                    bagRef: rc.name,
                    count: rc.count
                }))
            })
        });
    }

    private getBag(name: string): ILuggage {
        return this.bags.filter(b => b.name === name)[0];
    }

    canHoldBag(bagName: string, targetBagName: string): boolean {
        const bag = this.getBag(bagName);
        if(bag.capacity.filter(c => c.bagRef === targetBagName).length > 0) {
            return true;
        }
        return bag.capacity.map(c => {
            return this.canHoldBag(c.bagRef, targetBagName)
        }).filter(Boolean).length > 0;
    }

    bagMustHold(targetBag: string) : number {
        const bag = this.getBag(targetBag);
        let count = 0;

        bag.capacity.forEach(c => {
            let depCount = this.bagMustHold(c.bagRef);
            count += (depCount*c.count) + c.count;
        });

        return count;
    }


}