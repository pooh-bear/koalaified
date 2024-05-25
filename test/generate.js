import { assert } from 'chai';
import { generate } from '../dist/bundle.esm.js';

describe('Generate Name', () => {
    it('should return a valid generated value', () => {
        const result = generate();
        assert.isString(result);
        assert.isAbove(result.length, 10);
    });

    it('should work with parameters', () => {
        const result = generate({
            adjectiveCount: 3,
            seperator: '_',
        });
        assert.isString(result);
        assert.isAbove(result.length, 15);
        assert.include(result, '_');
    });

    it('not be a drop bear... they don\'t exist, Yanks!',() => {
        const result = generate();
        assert.notInclude(result, 'drop-bear');
    })
});