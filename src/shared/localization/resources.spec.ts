import 'jest';
import * as resources from './resources';

describe('resources', () => {
    it ('exports with translation namespace in english', () => {
        expect(resources.default.en.translation).not.toBeUndefined();
    });
});
