import { count } from 'console';
import {  readTextFile } from '../../utils'

const lines = readTextFile('../input.txt');

const wouldHitTree = (pattern: string, coulumIndex: number) => {
    console.log(coulumIndex)
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

lines.forEach((line, idx) => {
    if(wouldHitTree(line, idx * 3)) treeCount++
});

console.log(treeCount)