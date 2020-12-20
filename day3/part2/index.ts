import { count } from 'console';
import {  readTextFile } from '../../utils'

const lines = readTextFile('../input.txt');

const wouldHitTree = (pattern: string, coulumIndex: number) => {
    const repeat = pattern.length;
    let treeIndexes = [];
    pattern.split('').forEach((char, idx) => {

        if(char === '#') treeIndexes.push(idx);
    });
    
    if(treeIndexes.length === 0) {
        return false;
    }
    let bigger = false;
    while(!bigger) {
        for(let i = 0; i < treeIndexes.length; i++) {
            const treeIndex = treeIndexes[i];
            bigger = coulumIndex <= treeIndex;
            if(treeIndex === coulumIndex) return true;
        }

        treeIndexes = treeIndexes.map(i => (i + repeat))
    }
    return false;
}

let treeCount = 0;

interface config {
    right: number, 
    down: number, 
    count: number,
    columnIndex: number
}

// ight 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.

const configs: config[] = [
    {
        right: 1,
        down: 1,
        count: 0,
        columnIndex: 0
    },
    {
        right: 3,
        down: 1,
        count: 0,
        columnIndex: 0
    },
    {
        right: 5,
        down: 1,
        count: 0,
        columnIndex: 0
    },
    {
        right: 7,
        down: 1,
        count: 0,
        columnIndex: 0

    },
    {
        right: 1,
        down: 2,
        count: 0,
        columnIndex: 0
    },
]

lines.forEach((line, lineIdx) => {
    if(lineIdx !== 0) {
        configs.forEach(co => {
            if(lineIdx % co.down === 0) {
                co.columnIndex += co.right;
                if(wouldHitTree(line, co.columnIndex)) co.count++
            }
        });
    }

});
console.log(configs)

console.log(configs.map(c => c.count).reduce((a, b) => (a * b), 1))
