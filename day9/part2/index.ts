import { readTextFile } from '../../utils' 
import Transmitter from './Transmitter'

const lines = readTextFile('../input.txt').map(Number);

const transmitter = new Transmitter(lines, 25)
const contin = transmitter.getContinous();
console.log(Math.min(...contin) + Math.max(...contin))
