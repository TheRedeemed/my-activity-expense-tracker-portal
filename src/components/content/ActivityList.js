import React from 'react';
import Activity from './Activity';

const ActivityList = ({ ...props }) => {
    const { activities, onAddExpenseClick, onPayBalanceClick } = props;

    const getActivityList = () => {
        return activities && activities.length > 0 ?
            activities.map((activity) =>
                <Activity
                    key={activity.title}
                    title={activity.title}
                    description={activity.description}
                    balance={activity.balance}
                    lastUpdatedTimestamp={activity.updatedTimestamp}
                    onAddExpenseClick={onAddExpenseClick}
                    onPayBalanceClick={onPayBalanceClick}
                />) :
            <h1>Activity List is empty</h1>
    };

    return (
        <div>
            <h2 style={{ fontSize: 'xx-large', fontFamily: 'monospace', color: '#00467d', fontWeight: 'bold', textAlign: 'center', marginBottom: 25 }} >ACTIVITIES & EXPENSES</h2>
            <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center', overflow: 'auto', height: '650px'}}>{ getActivityList() }</div>
        </div>
    );
};

export default ActivityList;