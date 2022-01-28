import * as React from 'react';
import { render } from '@testing-library/react';
import { } from 'react-test-render';
import { Masthead } from './masthead';

describe('masthead', () => {
    it('matches snapshot', () => {
        render(<Masthead/>);
        expect(screen).toMatchSnapshot();

    });
});
