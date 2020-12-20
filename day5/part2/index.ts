import BoardingPassScanner from './BoardingPassScanner';
import SeatCheckIn from './SeatCheckIn'

import {  readTextFile } from '../../utils'

const lines = readTextFile('../input.txt');
console.log(lines)
let highest = 0;

const checkInSystem = new SeatCheckIn(128, 8);

const sids = [];

lines.forEach(line => {
    const seat = BoardingPassScanner.getSeat(line);
    checkInSystem.assignSeat(seat);
    sids.push((seat.row * 8) + seat.column);
});

const freeSeats = checkInSystem.getFreeSeats();

freeSeats.forEach(freeSeat => {
    const sid = (freeSeat.row * 8) + freeSeat.column;

    if(sids.includes(sid+1) && sids.includes(sid-1)) {
        console.log(sid)
    }
});



