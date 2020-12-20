import { readTextFile } from '../../utils'
const lines: pass[] = readTextFile('../input.txt').map(line => {
    const [key, pass] = line.split(':');
    const [requirements, letter] = key.split(' ');
    const [firstIndex, secondIndex] = requirements.split('-').map(n => parseInt(n.trim()))
    return {
        password: pass.trim(),
        firstIndex,
        secondIndex,
        letter
    }
});

interface pass {
    firstIndex: number,
    secondIndex: number,
    letter: string,
    password: string
}

const createPasswordValidator = (requiredLetter: string, firstIndex: number, secondIndex: number) => {
    return (password: string) => {
        return (password[firstIndex -1 ] === requiredLetter || password[secondIndex -1 ] === requiredLetter) &&
        !(password[firstIndex -1 ] === requiredLetter && password[secondIndex -1 ] === requiredLetter);
    }
}

let count = 0;

lines.forEach(l => {
    const validator = createPasswordValidator(l.letter, l.firstIndex, l.secondIndex);
    if(validator(l.password)) count++;
});

console.log(count);





