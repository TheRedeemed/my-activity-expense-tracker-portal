import React from 'react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const Activity = ({...props}) => {
    const {title, description, balance, lastUpdatedTimestamp, onAddExpenseClick, onPayBalanceClick} = props;
    return (
        <div style={{display:'flex', flexFlow: 'column', border: '4px solid #66b2b2', width: '350px', margin: '15px', borderRadius: '15px'}}>
            <div style={{ padding: 10, borderBottom: '3px solid #e7eff6', background:'#66b2b2', color: '#FFF'}}>
                <span style={{fontSize: 'x-large', fontFamily: 'monospace'}}>{title}</span>
            </div>
            <div style={{padding: 15, fontFamily: 'monospace'}}>
                <p>{description}</p>
                <p style={{display: 'flex', flexFlow: 'column', alignItems: 'center', margin: '0px 0px 20px 0px'}}>
                    <span style={{margin: '20px 0px', padding: 10, fontSize: 40, color: '#66b2b2'}}>{balance}</span>
                    <span>balance as of:</span>
                    <span style={{fontWeight: 'bold'}}>{lastUpdatedTimestamp}</span>
                </p>
            </div>
            <div style={{display: 'flex', flexFlow: 'row', justifyContent:'space-between', padding: '5px'}}>
                <Button basic color='orange' onClick={() => onAddExpenseClick()}>
                    <Icon name='dollar' />
                    Add Expense
                </Button>
                <Button basic color='blue' onClick={() => onPayBalanceClick()}>
                    <Icon name='payment' />
                    Pay Balance
                </Button>
            </div>
        </div>
    );
};

export default Activity;