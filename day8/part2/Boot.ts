import {IInstruction} from './types'
interface IBootStatus {
    success: boolean,
    val: number
}
export default class Boot {
    accumulator: number = 0;
    static run(instructions: IInstruction[]): IBootStatus {
        let accumulator: number = 0;
        for (let i = 0; i < instructions.length; i++) {
            const ins = instructions[i];
            if(ins.visited) {
                return {
                    val: accumulator,
                    success: false
                };
            }
            ins.visited = true;
            if(ins.execute.opp === 'acc') accumulator += ins.execute.param;
            if(ins.execute.opp === 'jmp') i += ( ins.execute.param - 1 );
        }
        return {
            success: true,
            val: accumulator
        }
    }
}