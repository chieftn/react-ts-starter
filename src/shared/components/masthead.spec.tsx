import * as React from 'react';
import { shallow } from 'enzyme';
import { Masthead } from './masthead';

describe('masthead', () => {
    it('matches snapshot', () => {
        expect(<Masthead />).toMatchSnapshot();
    });
});
