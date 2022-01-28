import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { Masthead } from './masthead';
import { getMockT } from '../utils/testUtils';
import { ResourceKeys } from '../../localization/resourceKeys';

describe('masthead', () => {
    it('matches snapshot', () => {
        const component = create(<Masthead/>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('renders product name', () => {
        const t = getMockT();
        render(<Masthead/>);
        expect(screen.findByText(t(ResourceKeys.common.productName).toString()));
    });
});
