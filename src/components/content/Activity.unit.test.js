import React from 'react';
import { render } from '@testing-library/react';
import { activityMockData, onAddExpenseClickMockFn, onPayBalanceClickMockFn } from '../util/TestMockDataAndFns';
import Activity from './Activity';

it('renders activity with title, description, balance, balance date and action menu', () => {
    const { getByText, getByTestId } = render(<Activity 
                                                title={activityMockData.title} 
                                                description={activityMockData.description} 
                                                balance={activityMockData.balance} 
                                                lastUpdatedTimestamp={activityMockData.updatedTimestamp}
                                                onAddExpenseClick={onAddExpenseClickMockFn}
                                                onPayBalanceClick={onPayBalanceClickMockFn} />);
    
    expect(getByText('TEST')).toBeInTheDocument();
    expect(getByText('This is a test activity')).toBeInTheDocument();
    expect(getByText('$50')).toBeInTheDocument();
    expect(getByText('Wed Dec 30th 2020 8:07 PM')).toBeInTheDocument();
    expect(getByTestId('activity-action-menu')).toBeInTheDocument();
});