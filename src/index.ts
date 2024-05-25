import animals from './animals';
import adjectives from './adjectives';

const randomElement = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
};

export interface GenerateOptions {
    adjectiveCount?: number;
    seperator?: string;
}

const defaults = {
    adjectiveCount: 1,
    seperator: '-',
};

const generate = ({ adjectiveCount, seperator }: GenerateOptions = {}) => {
    let options = defaults;
    if (adjectiveCount) { options.adjectiveCount = adjectiveCount; }
    if (seperator) { options.seperator = seperator; }

    const adjs = Array.from({
        length: options.adjectiveCount
    }, () => randomElement(adjectives));
    const animal = randomElement(animals);

    return [...adjs, animal].join(options.seperator);
}

export { generate, adjectives, animals }
export default generate;