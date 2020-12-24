import React from 'react';
import ActivityActionsMenu from './ActivityActionsMenu';

const Activity = ({...props}) => {
    const {title, description, balance, lastUpdatedTimestamp, onAddExpenseClick, onPayBalanceClick} = props;
    return (
        <div style={{display:'flex', flexFlow: 'column', border: '4px solid #00467d', width: '350px', margin: '15px', borderRadius: '15px'}}>
            <div style={{ display:'flex', flexFlow:'row', alignItems: 'baseline', justifyContent: 'space-between', padding: 10, borderBottom: '3px solid #e7eff6', background:'#00467d', color: '#FFF'}}>
                <span style={{fontSize: 'x-large', fontFamily: 'monospace'}}>{title.toUpperCase()}</span>
                <ActivityActionsMenu onAddExpenseClick={onAddExpenseClick} onPayBalanceClick={onPayBalanceClick} />
            </div>
            <div style={{padding: 15, fontFamily: 'monospace'}}>
                <p style={{color: '#104879'}}>{description}</p>
                <p style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
                    <span style={{margin: '20px 0px', padding: 10, fontSize: 40, color: '#104879'}}>{balance}</span>
                    <span style={{color: '#104879'}}>balance as of:</span>
                    <span style={{color: '#104879', fontWeight: 'bold'}}>{lastUpdatedTimestamp}</span>
                </p>
            </div>
        </div>
    );
};

export default Activity;