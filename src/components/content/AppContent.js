import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import Request from '../util/Request';
import NewActivityModal from '../modals/NewActivityModal';
import { Loader, Message } from 'semantic-ui-react';

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
    const activityRequestStatus = {
        isSubmitting: false,
        hasError: false,
        isSuccessful: false
    }
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');
    const [activityList, setActivityList] = useState([]);
    const [activityRequestFlags, setActivityRequestFlags] = useState(activityRequestStatus);

    useEffect(() => {
        getActivityList();
    }, []);

    const getActivityList = async () => {
        let { data, error } = await Request.sendRequest({ url: 'http://localhost:8080/activity/all', method: 'GET' });
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
            <div style={{width:'25%'}}>
                <Message
                    error
                    header='Bummer!'
                    icon='frown outline'
                    content={errMsg}
                />
            </div>  :
            <ActivityList 
                activities={activityList} 
                onAddExpenseClick={handleAddExpenseClick} 
                onPayBalanceClick={handlePayBalanceClick} 
            />
    }

    const handleAddExpenseClick = () => console.log('Added expense');
    const handlePayBalanceClick = () => console.log('Paid balance');
    const handleAddActivityClick = async (activity) => {
        console.log('submitting add activity request', activity);
        activity.balance = 0;
        setActivityRequestFlags({ isSubmitting: true });
        let { data, error } = await Request.sendRequest({ url: 'http://localhost:8080/activity/new', method: 'POST', request: activity });
        if (data) {
            setActivityRequestFlags({ isSubmitting: false, hasError: false, isSuccessful: true });
            removeNotification();
        } else if (error) {
            setActivityRequestFlags({ isSubmitting: false, hasError: true, isSuccessful: false });
            removeNotification();
        }
    };

    const removeNotification = () => {
        setTimeout(() => {
            setActivityRequestFlags({ isSubmitting: false, hasError: false, isSuccessful: false });
        }, 3000);
    }

    return (
        <div>
            <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '0px 55px' }}>
                <h1 style={{ fontSize: 'xxx-large', fontFamily: 'monospace', color: '#00467d', fontWeight: 'bold', margin: 0 }}>Hello, ABDOUL</h1>
                <NewActivityModal onAddActivityClick={handleAddActivityClick} activityRequestFlags={activityRequestFlags} />
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