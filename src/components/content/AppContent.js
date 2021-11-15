import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import Request from '../util/Request';
import NewActivityModal from '../modals/NewActivityModal';
import { Loader, Message } from 'semantic-ui-react';

const API_URL = 'http://localhost:8080/api/v1/activities';

const AppContent = () => {
    const activityRequestStatus = {
        isSubmitting: false,
        hasError: false,
        isSuccessful: false
    };
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');
    const [activityList, setActivityList] = useState([]);
    const [activityRequestFlags, setActivityRequestFlags] = useState(activityRequestStatus);

    useEffect(() => {
        getActivityList();
    }, []);

    const getActivityList = async () => {
        let { data, error } = await Request.sendRequest({ url: API_URL, method: 'GET' });
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
            <div style={{width:'25%', margin: 'auto'}}>
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

    const handleAddExpenseClick = async (activityTitle) => {
        const activityToUpdate = activityList.filter(activity => activity.title === activityTitle)[0];
        console.log('Adding expense for', activityToUpdate);

        const updateBalanceRequest = {
            title: activityTitle,
            balance: activityToUpdate.fee + activityToUpdate.balance
        };

        let { data, error } = await Request.sendRequest({ url: API_URL, method: 'PATCH', request: updateBalanceRequest })

        if(data) {
            const activities = activityList.map(activity => {
                if(activity.title === activityTitle) {
                    return {title: activity.title, description: activity.description, fee: data.fee, balance: data.balance}
                }
                return activity;
            })
            setActivityList(activities);
        } else if(error) {
            setErrMsg('An Error occured while loading Activity List');
            <Message
                    error
                    header='Bummer!'
                    icon='frown outline'
                    content={errMsg}
                />
        }

    };
    const handlePayBalanceClick = () => console.log('Paid balance');
    const handleAddActivityClick = async (activity) => {
        console.log('submitting add activity request', activity);
        activity.balance = 0;
        setActivityRequestFlags({ isSubmitting: true });
        let { data, error } = await Request.sendRequest({ url: API_URL, method: 'POST', request: activity });
        if (data) {
            setActivityRequestFlags({ isSubmitting: false, hasError: false, isSuccessful: true });
        } else if (error) {
            setActivityRequestFlags({ isSubmitting: false, hasError: true, isSuccessful: false });
        }
    };

    const removeRequestNotification = () => {
        setActivityRequestFlags({ isSubmitting: false, hasError: false, isSuccessful: false });
    }

    return (
        <div>
            <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '0px 55px' }}>
                <h1 style={{ fontSize: 'xxx-large', fontFamily: 'monospace', color: '#00467d', fontWeight: 'bold', margin: 0 }}>Hello, ABDOUL</h1>
                <NewActivityModal 
                    onAddActivityClick={handleAddActivityClick} 
                    activityRequestFlags={activityRequestFlags} 
                    removeRequestNotification={removeRequestNotification}
                    getActivityList={getActivityList}
                />
            </div>
            {
                loading ?
                <Loader active size='massive'>Loading Activity List...</Loader> :
                <div style={{margin: '50px 0px'}}>
                    {getAppContent()}
                </div>

            }
        </div>
    );
};

export default AppContent;