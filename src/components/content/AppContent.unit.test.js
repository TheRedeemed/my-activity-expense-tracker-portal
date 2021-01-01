import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { activityListMockData, mockRequestResponse } from '../util/TestMockDataAndFns';
import Request from '../util/Request';
import AppContent from './AppContent';

beforeEach(() => {
    mockRequestResponse.data = '';
    mockRequestResponse.error = '';
});

it('Given data is successfully retrieved from the api call to get list of activities, then display the app content with list of activities', () => {
    mockRequestResponse.data = activityListMockData;
    const getActivityList = jest.spyOn(Request, 'sendRequest').mockImplementationOnce(() => mockRequestResponse);
    const { getByText } = render(<AppContent />);
    expect(getActivityList).toHaveBeenCalled();
    waitFor(() => {
        expect(getByText('Hello, ABDOUL')).toBeInTheDocument();
        expect(getByText('ACTIVITIES & EXPENSES')).toBeInTheDocument();
        expect(getByText('TEST')).toBeInTheDocument();
        expect(getByText('This is a test activity')).toBeInTheDocument();
        expect(getByText('$50')).toBeInTheDocument();
        expect(getByText('Wed Dec 30th 2020 8:07 PM')).toBeInTheDocument();
        expect(getByTestId('activity-action-menu')).toBeInTheDocument();
    });
});

// it('Given an error occurs while calling the api call to get list of activities, then display an error message', () => {
//     mockRequestResponse.error = 'Api Call failed';
//     const getActivityList = jest.spyOn(Request, 'sendRequest').mockImplementationOnce(() => mockRequestResponse);
//     const { getByText } = render(<AppContent />);
//     // expect(getActivityList).toHaveBeenCalled();
//     waitFor(() => {
//         expect(getByText('Hello, ABDOUL')).toBeInTheDocument();
//         expect(getByText('Error')).toBeInTheDocument();
//         expect(getByText('An Error occured while loading Activity List')).toBeInTheDocument();
//     });
// });