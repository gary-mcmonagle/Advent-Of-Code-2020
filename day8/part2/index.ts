import { readTextFile } from '../../utils' 
import { IInstruction } from './types'

import Boot from './Boot'
import Patcher from './Patcher'

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

const patcher = new Patcher(instructions);

const possibles = patcher.getPossibles();
console.log(possibles.map(p => Boot.run(p)).filter(p => p.success))