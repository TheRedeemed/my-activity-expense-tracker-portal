import React from 'react';
import { Icon } from 'semantic-ui-react';

const MenuItem = ({...props}) => {
    const { iconName, displayText, func } = props
    return(
        <span style={{ cursor: 'pointer'}} onClick={() => func()}>
            <Icon name={iconName} />
            {displayText}
        </span>
    );
};

export default MenuItem;