import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import Request from '../util/Request';
import { Loader, Message, Icon } from 'semantic-ui-react';

// const ActivityListData = [
//     {
//         id: 1,
//         title: 'Martial Arts',
//         description: 'Martial art activity with Mark. Every Monday at 6pm',
//         balance: '$0',
//         updatedTimestamp: '12/08/2020 11:20 PM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     },
//     {
//         id: 2,
//         title: 'Workout',
//         description: 'Workout with Andrew. Every Tuesday and Thursday at 7:30am',
//         balance: '$30',
//         updatedTimestamp: '12/22/2020 10:30 AM'
//     }
// ];

const AppContent = () => {
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');
    const [activityList, setActivityList] = useState([]);

    useEffect(() => {
        getActivityList();
    }, []);

    const getActivityList = async () => {
        let { data, error } = await Request.sendRequest({ requestUrl: 'http://localhost:8080/activity-expense' });
        
        if (data) {
            setActivityList(data);
            setLoading(false);
        } else if (error) {
            setLoading(false);
            setErrMsg('An Error occured while loading Activity List');
        }
    };

    const getAppContent = () => {
        return errMsg ?
            <Message negative style={{ fontSize: 'xx-large', fontFamily: 'monospace', textAlign: 'center' }}>
                <Message.Header>
                    <Icon name='exclamation circle' data-testid='error-icon' />
                Error
            </Message.Header>
                <p>{errMsg}</p>
            </Message> :
            <ActivityList activities={activityList} onAddExpenseClick={handleAddExpenseClick} onPayBalanceClick={handlePayBalanceClick} />
    }

    const handleAddExpenseClick = () => console.log('Added expense');
    const handlePayBalanceClick = () => console.log('Paid balance');

    return (
        <div>
            <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'baseline' }}>
                <h1 style={{ fontSize: 'xxx-large', fontFamily: 'monospace', color: '#00467d', fontWeight: 'bold', margin: '0px 25px' }}>Hello, ABDOUL</h1>
            </div>
            {
                loading ?
                    <Loader active size='massive'>Loading Activity List...</Loader> :
                    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', margin: '50px 200px' }}>
                        {getAppContent()}
                    </div>

            }
        </div>
    );
};

export default AppContent;