import { readTextFile } from '../../utils' 
import { ILuggageRule } from './types'

import LuggageProcessor from './LuggageProcessor'

const lines = readTextFile('../input.txt');

const luggageRules: ILuggageRule[] = [];

lines.forEach(line => {
    const [root, allRules] = line.split('contain');
    const bagName = root.replace(' bags', '').trim()
    let rules = allRules.split(',').map(rule => {
        return rule.replace('.', '').replace('bags', '').replace('bag', '').trim();
    });
    if(rules[0] === 'no other') rules = [];

    const capacity = rules.map(r => {
        const [count] = r.split(' ');
        const sp = r.split(' ')
        sp.shift()

        return {
            name: sp.join(' '),
            count: Number(count)
        }
    });



    luggageRules.push({
        bagName,
        capacity
    });
});

console.log(luggageRules);

const lp = new LuggageProcessor(luggageRules)

const targetBag = 'shiny gold';
let count = lp.bagMustHold(targetBag);

console.log(count)