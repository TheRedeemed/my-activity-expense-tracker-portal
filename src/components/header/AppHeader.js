import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const AppHeader = () => (
    <Segment clearing style={{background: '#00467d'}}>
        <Header as='h2' style={{display: 'flex', flexFlow: 'row', alignItems: 'baseline', justifyContent: 'space-between'}}>
            <span style={{color: '#FFF'}}>ACTIVITY EXPENSE TRACKER</span>
            <span style={{color: '#00467d', padding: 5, border: '1px solid', borderRadius: 100, background: '#FFF'}}>AS</span>
        </Header>
    </Segment>
);

export default AppHeader;