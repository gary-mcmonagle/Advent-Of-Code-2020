import { readTextFile } from '../utils'

const entries: number[] = readTextFile('./input.txt').map(line => parseInt(line));

for(let i = 0; i < entries.length; i++) {
    for(let j = 0; j < entries.length; j++) {
        if(i !== j) {
            const first = entries[i];
            const second = entries[j];
            if( first + second === 2020) {
                console.log(first * second);
            }
        }
    }
}

