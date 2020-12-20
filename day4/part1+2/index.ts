import {  readTextFile } from '../../utils'
import PassportProcessor from './PassportProcessor'

const rawDocsLines = readTextFile('../input.txt');
const rawDocs = [];

let doc = '';
rawDocsLines.forEach(line => {
    if(!line) {
        rawDocs.push(doc);
        doc = '';
    }
    else {
        doc = doc ? doc + ' ' + line : line;
    }
});
rawDocs.push(doc)

const pp = new PassportProcessor();

console.log(rawDocs.filter(doc => pp.isValid(doc)).length)
// pp.isValid(rawDocs[0]);



