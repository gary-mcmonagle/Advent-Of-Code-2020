import { ISeatNumber } from './types'
export default class SeatCheckIn {
    seats: string[][] = [[]];
    constructor(planeRows: number, planeColumns: number) {
        for(let i = 0; i < planeRows; i++) {
            for(let j = 0; j < planeColumns; j++) {
                if(!this.seats[i]) this.seats[i] = [];
                this.seats[i][j] = 'Empty';
            }
        }
    }

    assignSeat(seat: ISeatNumber) {
        this.seats[seat.row][seat.column] = 'Taken';
    }

    getFreeSeats() : ISeatNumber[] {
        const freeSeats: ISeatNumber[] = [];
        for(let i = 0; i < this.seats.length; i++) {
            const row = this.seats[i];
            for(let j = 0; j < row.length; j++) {
                if(this.seats[i][j] == 'Empty') {
                    freeSeats.push({
                        row: i,
                        column: j
                    });
                }
            }
        }
        return freeSeats
    }
}