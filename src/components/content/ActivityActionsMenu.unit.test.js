import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { onAddExpenseClickMockFn, onPayBalanceClickMockFn } from '../util/TestMockDataAndFns';
import ActivityActionsMenu from './ActivityActionsMenu';

it('Should render the activity action menu',() => {
    const { getByTestId } = render(<ActivityActionsMenu onAddExpenseClick={onAddExpenseClickMockFn} onPayBalanceClick={onPayBalanceClickMockFn} />);
    expect(getByTestId('activity-action-menu')).toBeInTheDocument();
});

it('Should display the menu items on first click and hide it on the second click',() => {
    const { getByTestId, getByText } = render(<ActivityActionsMenu onAddExpenseClick={onAddExpenseClickMockFn} onPayBalanceClick={onPayBalanceClickMockFn} />);
    const menu = getByTestId('activity-action-menu');
    expect(menu).toBeInTheDocument();

    fireEvent.click(menu);

    waitFor(() => {
        expect(getByText('Add Expense')).toBeInTheDocument();
        expect(getByText('Pay Balance')).toBeInTheDocument();
        
        fireEvent.click(menu);

        expect(getByText('Add Expense')).not.toBeInTheDocument();
        expect(getByText('Pay Balance')).not.toBeInTheDocument();
    });
});