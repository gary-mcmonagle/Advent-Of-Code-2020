import { readTextFile } from '../utils'

const entries: number[] = readTextFile('./input.txt').map(line => parseInt(line));

const entriesIndex = {};
entries.forEach(e => entriesIndex[e] = 1);

for(let i = 0; i < entries.length; i++) {
    for(let j = 0; j < entries.length; j++) {
        if(i !== j) {
            const first = entries[i];
            const second = entries[j];
            const requiredThird = 2020 - (first + second);
            if(entriesIndex[requiredThird]) {
                console.log(first * second * requiredThird)
            }
        }
    }
}




