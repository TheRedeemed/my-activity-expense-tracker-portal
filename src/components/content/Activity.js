import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Dropdown, Menu } from 'semantic-ui-react';

const Activity = ({...props}) => {
    const [activityMenu, setActivityMenu] = useState(false);
    const {title, description, balance, lastUpdatedTimestamp, onAddExpenseClick, onPayBalanceClick} = props;
    return (
        <div style={{display:'flex', flexFlow: 'column', border: '4px solid #66b2b2', width: '350px', margin: '15px', borderRadius: '15px'}}>
            <div style={{ display:'flex', flexFlow:'row', justifyContent: 'space-between', padding: 10, borderBottom: '3px solid #e7eff6', background:'#66b2b2', color: '#FFF'}}>
                <span style={{fontSize: 'x-large', fontFamily: 'monospace'}}>{title}</span>
                <span style={{cursor: 'pointer', border: '2px solid', borderRadius:10, padding: '5px 2px 5px 5px'}} onClick={() => setActivityMenu(!activityMenu)}>
                    <Icon name='ellipsis vertical' />
                </span>
            </div>
            {
                activityMenu &&
                <div style={{display: 'flex', flexFlow: 'column', border: '1px solid #66b2b2', borderRadius:10, width: 130, padding: 5, background:'#fbfdfb', position: 'relative', zIndex: 2, bottom: 10, left: 200}}>
                    <span style={{margin: 5}}>
                        <Icon name='dollar' />
                        Add Expense
                    </span>
                    <span style={{margin: 5}}>
                        <Icon name='payment' />
                        Pay Balance    
                    </span>
                </div>
            }
            <div style={{padding: 15, fontFamily: 'monospace'}}>
                <p>{description}</p>
                <p style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
                    <span style={{margin: '20px 0px', padding: 10, fontSize: 40, color: '#66b2b2'}}>{balance}</span>
                    <span>balance as of:</span>
                    <span style={{fontWeight: 'bold'}}>{lastUpdatedTimestamp}</span>
                </p>
            </div>
            {/* <div style={{display: 'flex', flexFlow: 'row', justifyContent:'space-between', padding: '5px'}}>
                <Button basic color='orange' onClick={() => onAddExpenseClick()}>
                    <Icon name='dollar' />
                    Add Expense
                </Button>
                <Button basic color='blue' onClick={() => onPayBalanceClick()}>
                    <Icon name='payment' />
                    Pay Balance
                </Button>
            </div> */}
        </div>
    );
};

export default Activity;