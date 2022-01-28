import * as React from 'react';
import { render } from '@testing-library/react';
import { Masthead } from './masthead';

describe('masthead', () => {
    it('matches snapshot', () => {
        render(<Masthead/>);
        expect(screen).toMatchSnapshot();

    });
});
