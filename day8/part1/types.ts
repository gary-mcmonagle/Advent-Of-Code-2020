enum Operation {
    acc,
    nop,
    jump
}
export interface IInstruction {
    visited: boolean,
    execute: {
        opp: string,
        param: number
    }
}