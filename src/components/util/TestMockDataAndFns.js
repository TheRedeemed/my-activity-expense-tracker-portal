const activityMockData = {
    title: "Test",
    description: "This is a test activity",
    balance: 50,
    fee: 25,
    updatedTimestamp: "2020-12-30T20:07:58",
};

const onAddExpenseClickMockFn = jest.fn();
const onPayBalanceClickMockFn = jest.fn();

const activityListMockData = [
    activityMockData
];

const mockRequestResponse = {
    data: '',
    error: ''
};

export {
    activityMockData,
    onAddExpenseClickMockFn,
    onPayBalanceClickMockFn,
    activityListMockData,
    mockRequestResponse
}