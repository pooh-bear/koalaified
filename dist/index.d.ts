import animals from './animals';
import adjectives from './adjectives';
export interface GenerateOptions {
    adjectiveCount?: number;
    seperator?: string;
}
declare const generate: ({ adjectiveCount, seperator }?: GenerateOptions) => string;
export { generate, adjectives, animals };
export default generate;
