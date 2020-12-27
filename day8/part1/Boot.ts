import {IInstruction} from './types'
export default class Boot {
    accumulator: number = 0;
    static run(instructions: IInstruction[]) {
        let accumulator: number = 0;
        for (let i = 0; i < instructions.length; i++) {
            const ins = instructions[i];
            console.log(ins)
            if(ins.visited) {
                return accumulator;
            }
            ins.visited = true;
            if(ins.execute.opp === 'acc') accumulator += ins.execute.param;
            if(ins.execute.opp === 'jmp') i += ( ins.execute.param - 1 );
        }

    }
}