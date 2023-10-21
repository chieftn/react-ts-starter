import * as React from 'react';
import { createRenderer as createShallowRenderer } from 'react-test-renderer/shallow';
import { Masthead } from './masthead';

describe('masthead', () => {
    it('matches snapshot', () => {
        const renderer = createShallowRenderer();
        renderer.render(<Masthead />);

        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});
