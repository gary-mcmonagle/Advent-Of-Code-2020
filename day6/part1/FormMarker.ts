import { uniq } from 'lodash'
export default abstract class FormMarker {
    static mark(papers: string[]): number {
        const letters = uniq(papers.join('').split('')).length;

        return letters;
    }
}