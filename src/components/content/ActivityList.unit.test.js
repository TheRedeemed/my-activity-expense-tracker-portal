import React from 'react';
import { render } from '@testing-library/react';
import { activityListMockData, onAddExpenseClickMockFn, onPayBalanceClickMockFn } from '../util/TestMockDataAndFns';
import ActivityList from './ActivityList';


it('Given the activity list is not empty, render ActivityList component with the list of activities', () => {
    const {getByText, getByTestId} = render(<ActivityList activities={activityListMockData} onAddExpenseClick={onAddExpenseClickMockFn} onPayBalanceClick={onPayBalanceClickMockFn} />);
    expect(getByText('ACTIVITIES & EXPENSES')).toBeInTheDocument();
    expect(getByText('TEST')).toBeInTheDocument();
    expect(getByText('This is a test activity')).toBeInTheDocument();
    expect(getByText('$50')).toBeInTheDocument();
    expect(getByText('Wed Dec 30th 2020 8:07 PM')).toBeInTheDocument();
    expect(getByTestId('activity-action-menu')).toBeInTheDocument();
});

it('Given the activity list is empty, display empty list message', () => {
    const {getByText, getByTestId} = render(<ActivityList activities={[]} onAddExpenseClick={onAddExpenseClickMockFn} onPayBalanceClick={onPayBalanceClickMockFn} />);
    expect(getByText('ACTIVITIES & EXPENSES')).toBeInTheDocument();
    expect(getByText('Activity List is empty')).toBeInTheDocument();
});