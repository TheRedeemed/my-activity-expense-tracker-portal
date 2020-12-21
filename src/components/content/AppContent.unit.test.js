import React from 'react';
import { render } from '@testing-library/react';
import AppContent from './AppContent';

it('Should display the app content with list of activities', () => {
    const { getByText } = render(<AppContent />);
    expect(getByText('Activities & Expenses')).toBeInTheDocument();
    expect(getByText('Martial Art')).toBeInTheDocument();
    expect(getByText('Workout')).toBeInTheDocument();
})