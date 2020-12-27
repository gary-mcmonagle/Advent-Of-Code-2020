import { IInstruction } from './types'
import { cloneDeep } from 'lodash'
export default class Patcher {
    base: IInstruction[];
    constructor(base: IInstruction[]) {
        this.base = base;
    }

    _cloneBase() {
        return this.base.map(cloneDeep)
    }

    getPossibles():  IInstruction[][] {
        const possibles: IInstruction[][] = [this.base];
        for (let i = 0; i < this.base.length; i++) {
            const clone = this._cloneBase();
            const ins = clone[i];
            if (ins.execute.opp === 'jmp' || ins.execute.opp === 'nop') {
                const opp = ins.execute.opp;
                if(opp === 'jmp') {
                    ins.execute.opp = 'nop';
                }
                else if(opp === 'nop') {
                    ins.execute.opp = 'jmp';
                }
                clone[i] = ins
                possibles.push(clone)
            }   
        }
        return possibles;
    }
}