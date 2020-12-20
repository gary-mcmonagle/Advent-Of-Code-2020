import FormMarker from './FormMarker';
import { readTextFile } from '../../utils' 

const lines = readTextFile('../input.txt');
const groups = [];
let group = [];
lines.forEach(line => {
    if(!line){
        groups.push(group)
        group = [];
    } 
    else {
        group.push(line);
    }
});
groups.push(group);


console.log(groups.map(FormMarker.mark).reduce((a, b) => a + b, 0))
