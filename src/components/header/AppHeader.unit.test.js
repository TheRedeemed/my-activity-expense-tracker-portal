import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from './AppHeader';

it('Should render the app Header with App title and user initial', () => {
    const { getByText } = render(<AppHeader />);
    expect(getByText('MY ACTIVITY EXPENSE TRACKER PORTAL')).toBeInTheDocument();
    expect(getByText('AS')).toBeInTheDocument();
});
