export interface ISeatNumber {
    row: number,
    column: number
}

export default abstract class BoardingPassScanner {
    static getSeat(rawPass: string) : ISeatNumber {
        const rawRow = rawPass.slice(0, rawPass.length-3);
        const rawColumn = rawPass.slice(rawPass.length-3, rawPass.length);

        console.log(rawRow)
        console.log(rawColumn);
        return { 
            row: this.getRow(rawRow),
            column: this.getColumn(rawColumn)
        }
    }

    private static getColumn(rawColumn: string): number{
        let rows: number[] = Array.from(Array(8).keys());
        rawColumn.split('').forEach(letter => {
            const half = Math.ceil(rows.length / 2);    
            const firstHalf = rows.splice(0, half);
            const secondHalf = rows.splice(-half);
            rows = letter === 'L' ? firstHalf : secondHalf;
        });
        return rows[0];
    }

    private static getRow(rawRow: string): number {
        let rows: number[] = Array.from(Array(128).keys());
        rawRow.split('').forEach(letter => {
            const half = Math.ceil(rows.length / 2);    
            const firstHalf = rows.splice(0, half);
            const secondHalf = rows.splice(-half);
            rows = letter === 'F' ? firstHalf : secondHalf;
        });

        return rows[0];
    }


}