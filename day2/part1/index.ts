import { readTextFile } from '../../utils'
const lines: pass[] = readTextFile('../input.txt').map(line => {
    const [key, pass] = line.split(':');
    const [requirements, letter] = key.split(' ');
    const [min, max] = requirements.split('-').map(n => parseInt(n.trim()))
    return {
        password: pass.trim(),
        min,
        max,
        letter
    }
});

interface pass {
    min: number,
    max: number,
    letter: string,
    password: string
}

const createPasswordValidator = (requiredLetter: string, min: number, max: number) => {
    return (password: string) => {
        const count = password.split(requiredLetter).length -1;
        return count >= min && count <= max;
    }
}

let count = 0;

lines.forEach(l => {
    const validator = createPasswordValidator(l.letter, l.min, l.max);
    if(validator(l.password)) count++;
});

console.log(count);





