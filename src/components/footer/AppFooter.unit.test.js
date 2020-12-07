import React from 'react';
import { render } from '@testing-library/react';
import AppFooter from './AppFooter';

it('Should render the app footer', () => {
    const { getByText } = render(<AppFooter />);
    expect(getByText('The Redeemed - 2020')).toBeInTheDocument();
});