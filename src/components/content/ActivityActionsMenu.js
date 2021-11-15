import React from 'react';
import { Icon, Grid, Popup } from 'semantic-ui-react';
import MenuItem from '../util/MenuItem';

const ActivityActionsMenu = ({ ...props }) => {
    const { activityTitle, onAddExpenseClick, onPayBalanceClick } = props;
    const menuItems = [
        {
            iconName: 'dollar',
            displayText: 'Add Expense',
            func: onAddExpenseClick
        },
        {
            iconName: 'payment',
            displayText: 'Pay Balance',
            func: onPayBalanceClick
        }
    ];

    return (
        <Popup
            trigger={<span style={{ cursor: 'pointer', border: '2px solid', borderRadius: 10, padding: '5px 2px 5px 5px' }}> <Icon name='ellipsis vertical' data-testid='activity-action-menu' /></span>}
            style={{ position: 'relative', left: 5 }}
            on='click'
            positionFixed
            position='bottom right'
        >
            <Grid divided='vertically' centered style={{ width: 125 }}>
                {
                    menuItems.map((menuItem) => {
                        const { iconName, displayText, func } = menuItem
                        return <Grid.Row key={iconName} style={{ color: '#00467d', fontWeight: 'bold'}}>
                                   <MenuItem iconName={iconName} displayText={displayText} func={func} activityTitle={activityTitle} />
                                </Grid.Row>
                    })
                }
            </Grid>
        </Popup>
    );
}

export default ActivityActionsMenu;