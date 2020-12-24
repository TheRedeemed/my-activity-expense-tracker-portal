import React from 'react';
import { Icon, Grid, Popup } from 'semantic-ui-react';
import MenuItem from '../util/MenuItem';

const ActivityActionsMenu = ({ ...props }) => {
    const { onAddExpenseClick, onPayBalanceClick } = props;
    return (
        <Popup
            trigger={<span style={{ cursor: 'pointer', border: '2px solid', borderRadius: 10, padding: '5px 2px 5px 5px' }}> <Icon name='ellipsis vertical' /></span>}
            style={{ position: 'relative', left: 5 }}
            on='click'
            positionFixed
            position='bottom right'
        >
            <Grid divided='vertically' centered style={{width: 125}}>
                <Grid.Row style={{color: '#00467d', fontWeight:'bold'}}>
                    <MenuItem iconName='dollar' displayText='Add Expense' func = {onAddExpenseClick} />
                </Grid.Row>
                <Grid.Row style={{color: '#00467d', fontWeight:'bold'}}>
                    <MenuItem iconName='payment' displayText='Pay Balance' func = {onPayBalanceClick} />
                </Grid.Row>
            </Grid>
        </Popup>
    );
}

export default ActivityActionsMenu;