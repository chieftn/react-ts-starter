import { getMockT } from './testUtils';

describe('getMockT', () => {
    it('returns function providing expected output', () => {
        const t = getMockT();
        const prefix = 'hello';
        const interpolation = { world: 'earth'};

        expect(t(prefix, interpolation)).toEqual(`${JSON.stringify(prefix)} ${JSON.stringify(interpolation)}`);
    });
});