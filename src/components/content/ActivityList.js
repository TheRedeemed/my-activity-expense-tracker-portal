import React from 'react';
import Activity from './Activity';

const ActivityList = ({...props}) => {
    const { activities, onAddExpenseClick, onPayBalanceClick } = props;

    return (
        <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', margin: '15px 350px'}}>
            <h2 style={{fontSize: 'xx-large', fontFamily: 'monospace'}} >Activities & Expenses</h2>
            <div style={{display: 'flex', flexFlow: 'wrap'}}>
                {
                    activities.map((activity) => 
                        <Activity 
                            key = {activity.id}
                            title = {activity.title}
                            description = {activity.description}
                            balance = {activity.balance}
                            lastUpdatedTimestamp = {activity.lastUpdatedTimestamp}
                            onAddExpenseClick = {onAddExpenseClick} 
                            onPayBalanceClick = {onPayBalanceClick}
                        />)
                }
            </div>
        </div>
    );
};

export default ActivityList;