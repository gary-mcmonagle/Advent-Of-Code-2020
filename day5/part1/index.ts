import BoardingPassScanner from './BoardingPassScanner';

import {  readTextFile } from '../../utils'

const lines = readTextFile('../input.txt');
console.log(lines)
let highest = 0;

lines.forEach(line => {
    const seat = BoardingPassScanner.getSeat(line);
    const sid = (seat.row * 8) + seat.column;
    if(sid > highest) highest = sid
});

console.log(highest);