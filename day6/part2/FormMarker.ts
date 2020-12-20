import { uniq } from 'lodash'
export default abstract class FormMarker {
    static mark(papers: string[]): number {
        const answered = papers.map(p => uniq(p.split('')));
        const letters = uniq(papers.join('').split(''));
        let count = 0;
        letters.forEach(l => {
            if(answered.map(a => a.includes(l)).filter(Boolean).length === answered.length) count++
        });
        return count;
    }
}