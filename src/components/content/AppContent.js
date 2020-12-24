import React from 'react';
import ActivityList from './ActivityList';

const ActivityListData = [
    {
        id: 1,
        title: 'Martial Arts',
        description: 'Martial art activity with Mark. Every Monday at 6pm',
        balance: '$0',
        lastUpdatedTimestamp: '12/08/2020 11:20 PM'
    },
    {
        id: 2,
        title: 'Workout',
        description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
        balance: '$30',
        lastUpdatedTimestamp: '12/22/2020 10:30 AM'
    },
    // {
    //     id: 3,
    //     title: 'Workout',
    //     description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
    //     balance: '$15',
    //     lastUpdatedTimestamp: '12/17/2020 10:30 AM'
    // },
    // {
    //     id: 4,
    //     title: 'Workout',
    //     description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
    //     balance: '$15',
    //     lastUpdatedTimestamp: '12/17/2020 10:30 AM'
    // },
    // {
    //     id: 5,
    //     title: 'Workout',
    //     description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
    //     balance: '$15',
    //     lastUpdatedTimestamp: '12/17/2020 10:30 AM'
    // },
    // {
    //     id: 6,
    //     title: 'Workout',
    //     description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
    //     balance: '$15',
    //     lastUpdatedTimestamp: '12/17/2020 10:30 AM'
    // }
];

const handleAddExpenseClick = () => console.log('Added expense');
const handlePayBalanceClick = () => console.log('Paid balance');

const AppContent = () => {
    return(
        <div>
            <div style={{display: 'flex', flexFlow: 'row', alignItems: 'baseline'}}>
                <h1 style={{fontSize: 'xxx-large', fontFamily: 'monospace', color: '#00467d', fontWeight:'bold', margin: '0px 25px'}}>Hello, ABDOUL</h1>
            </div>
            <ActivityList activities={ActivityListData} onAddExpenseClick={handleAddExpenseClick} onPayBalanceClick={handlePayBalanceClick} />
        </div>
    );
};

export default AppContent;