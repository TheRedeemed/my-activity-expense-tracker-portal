import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { activityMockData, activityListMockData, mockRequestResponse } from '../util/TestMockDataAndFns';
import Request from '../util/Request';
import AppContent from './AppContent';
import { act } from 'react-dom/test-utils';

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

it('Given an error occurs while calling the api call to get list of activities, then display an error message', async () => {
    // mockRequestResponse.error = 'Api Call failed';
    // const getActivityList = jest.spyOn(Request, 'sendRequest').mockImplementationOnce(() => mockRequestResponse);
    const { getByText } = render(<AppContent />);
    // expect(getActivityList).toHaveBeenCalled();
    waitFor(() => {
        expect(getByText('Hello, ABDOUL')).toBeInTheDocument();
        expect(getByText('Error')).toBeInTheDocument();
        expect(getByText('An Error occured while loading Activity List')).toBeInTheDocument();
    });
});

it('Given a user clicks on the new activity button, and click on the Cancel button, then close the new activity modal', () => {
    const { getByText } = render(<AppContent />);
    const newActivityBtn = getByText('ADD NEW ACTIVITY');
    expect(newActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.click(newActivityBtn);
    });

    const newActivityModalTitle = getByText('ADD A NEW ACTIVITY'); 
    const cancelActivityBtn = getByText('CANCEL');
    expect(newActivityModalTitle).toBeInTheDocument();
    expect(cancelActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.click(cancelActivityBtn);
    });

    waitFor(() => {
        expect(getByText('ADD A NEW ACTIVITY')).not.toBeInTheDocument();
    });

});

it('Given a user clicks on the new activity button, and click on the Add button without entering data in the form, then display required fields error message and disable the add button', async () => {
    const { getByText } = render(<AppContent />);
    const newActivityBtn = getByText('ADD NEW ACTIVITY');
    expect(newActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.click(newActivityBtn);
    });

    const newActivityModalTitle = getByText('ADD A NEW ACTIVITY'); 
    const addActivityBtn = getByText('ADD');
    expect(newActivityModalTitle).toBeInTheDocument();
    expect(addActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.click(addActivityBtn);
    });

    await waitFor(() => {
        expect(getByText('Title is required')).toBeInTheDocument();
        expect(getByText('Fee is required')).toBeInTheDocument();
        expect(getByText('Description is required')).toBeInTheDocument();
        expect(addActivityBtn).toBeDisabled();
    });
});

it('Given a user clicks on the new activity button, and enters activity data and clicks on the Add button, when the activty is successfully added then display the successful message', async () => {
    const { getByText, getByTestId } = render(<AppContent />);
    const newActivityBtn = getByText('ADD NEW ACTIVITY');
    expect(newActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.click(newActivityBtn);
    });

    const newActivityModalTitle = getByText('ADD A NEW ACTIVITY'); 
    const addActivityBtn = getByText('ADD');
    const title = getByTestId('titleInput');
    const fee = getByTestId('feeInput');
    const description = getByTestId('descriptionInput');
    expect(newActivityModalTitle).toBeInTheDocument();
    expect(addActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.change(title, {target: {value: 'Test'}});
        fireEvent.change(fee, {target: {value: 25}});
        fireEvent.change(description, {target: {value: 'This is a test activity'}});
        fireEvent.click(addActivityBtn);
    });
    
    mockRequestResponse.data = activityMockData;
    const createNewActivity = jest.spyOn(Request, 'sendRequest').mockImplementationOnce(() => mockRequestResponse);
    
    await waitFor(() => {
        expect(createNewActivity).toHaveBeenCalled();
        expect(getByText('Your new activity has been created sucessfully. You can add another activity or close this window.')).toBeInTheDocument();
    });
});


it('Given a user clicks on the new activity button, and enters activity data and clicks on the Add button, when an error occurs then display an error message', async () => {
    const { getByText, getByTestId } = render(<AppContent />);
    const newActivityBtn = getByText('ADD NEW ACTIVITY');
    expect(newActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.click(newActivityBtn);
    });

    const newActivityModalTitle = getByText('ADD A NEW ACTIVITY'); 
    const addActivityBtn = getByText('ADD');
    const title = getByTestId('titleInput');
    const fee = getByTestId('feeInput');
    const description = getByTestId('descriptionInput');
    expect(newActivityModalTitle).toBeInTheDocument();
    expect(addActivityBtn).toBeInTheDocument();

    act(() => {
        fireEvent.change(title, {target: {value: 'Test'}});
        fireEvent.change(fee, {target: {value: 25}});
        fireEvent.change(description, {target: {value: 'This is a test activity'}});
        fireEvent.click(addActivityBtn);
    });
    
    mockRequestResponse.data = '';
    mockRequestResponse.error = 'An Error occured while adding a new activity';
    const createNewActivity = jest.spyOn(Request, 'sendRequest').mockImplementationOnce(() => mockRequestResponse);
    
    await waitFor(() => {
        expect(createNewActivity).toHaveBeenCalled();
        expect(getByText('An Error occured while adding a new activity. Please try again or contact support if the problem persists.')).toBeInTheDocument();
    });
});