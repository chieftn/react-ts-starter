import * as React from 'react';
// import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { Masthead } from './masthead';

describe('masthead', () => {
    it('matches snapshot', () => {
        const component = create(<Masthead/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
