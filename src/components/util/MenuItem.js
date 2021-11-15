import React from 'react';
import { Icon } from 'semantic-ui-react';

const MenuItem = ({...props}) => {
    const { iconName, displayText, func, activityTitle } = props
    return(
        <span style={{ cursor: 'pointer'}} onClick={() => func(activityTitle)}>
            <Icon name={iconName} data-testid='menu-item-icon' />
            {displayText}
        </span>
    );
};

export default MenuItem;