import React from 'react';
import { render } from '@testing-library/react';
import AppContent from './AppContent';

it('Should display the app content with list of activities', () => {
    const { getByText } = render(<AppContent />);
    expect(getByText('Hello, ABDOUL')).toBeInTheDocument();
    expect(getByText('ACTIVITIES & EXPENSES')).toBeInTheDocument();
    expect(getByText('MARTIAL ARTS')).toBeInTheDocument();
    expect(getByText('WORKOUT')).toBeInTheDocument();
})