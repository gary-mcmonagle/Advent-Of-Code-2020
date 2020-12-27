import { readTextFile } from '../../utils' 
import Transmitter from './Transmitter'

const lines = readTextFile('../input.txt').map(Number);

const transmitter = new Transmitter(lines, 25)

console.log(transmitter.firstInvalid())