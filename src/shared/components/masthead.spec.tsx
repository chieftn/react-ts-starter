import * as React from 'react';
import { render } from '@testing-library/react';
import { Masthead } from './masthead';

describe('masthead', () => {
    it('matches snapshot', () => {
        const result = render(<Masthead/>);
        console.log(result.debug());
        expect(screen).toMatchSnapshot();

    });
});
