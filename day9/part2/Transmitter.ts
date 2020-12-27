export default class Transmitter {
    data: number[]
    preambleLength: number
    continousTaregt: number
    constructor(data: number[], preambleLength: number) {
        this.data = data;
        this.preambleLength = preambleLength;

        this.continousTaregt = this.firstInvalid();
    }

    firstInvalid(): number {
        for (let i = this.preambleLength; i < this.data.length; i++) {
            if(!this.isValidNextValue(this.data[i], i)) return this.data[i];
        }
        throw new Error('No invalid found');
    }

    private isValidNextValue(targtValue: number, currentIndex: number): boolean {
        const startIndex = currentIndex - this.preambleLength;
        const section = this.data.slice(startIndex, currentIndex);

        const comboGen = this.comboGenerator(section);

        let { value, done } = comboGen.next();
        do {
            let [a, b] = value;
            if(a + b === targtValue) return true; 
            ({ value, done } = comboGen.next());
        } while(!done)
        return false;
    }

    private * comboGenerator(section: number[]): Generator<number[], number[]> {
        for(let i = 0; i < section.length; i++) {
            for(let j = 0; j < section.length; j++) {
                if(i !== j) yield[section[i], section[j]]
            }
        }
        return [];
    }

    getContinous(): number[] {
        for(let i = 0; i < this.data.length; i++) {
            const contig = [];
            for(let j = i; j < this.data.length; j++) {
                contig.push(this.data[j]);
                const total: number = contig.reduce((a, b) => a + b)
                if (total === this.continousTaregt) return contig;
                if (total > this.continousTaregt) j = this.data.length;
            }
        }
        throw new Error('Could not get continous')
        return [];
    }


}