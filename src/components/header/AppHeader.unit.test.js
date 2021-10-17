import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from './AppHeader';

it('Should render the app Header with App title and user initial', () => {
    const { getByText } = render(<AppHeader />);
    expect(getByText('ACTIVITY EXPENSE TRACKER')).toBeInTheDocument();
    expect(getByText('AS')).toBeInTheDocument();
});
