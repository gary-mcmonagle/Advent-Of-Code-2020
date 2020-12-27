import { readTextFile } from '../../utils' 
import { IInstruction } from './types'

import Boot from './Boot'

const lines = readTextFile('../input.txt');

const instructions: IInstruction[] = lines.map(line => {
    const [ex, param] = line.split(' ');
    return {
        visited: false,
        execute: {
            opp: ex,
            param: Number(param.replace('+', ''))
        }
    }
});

console.log(Boot.run(instructions))