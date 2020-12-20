const fs = require('fs');
export function readTextFile(path:string) :string[] {

    try {
        const data = fs.readFileSync(path, 'UTF-8');
        const lines = data.split(/\r?\n/);
        return lines
    } 
    catch (err) {
        console.error(err);
    }
}