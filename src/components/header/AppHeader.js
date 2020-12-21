import React from 'react';
import { Header, Segment } from 'semantic-ui-react'

const AppHeader = () => (
    <Segment clearing>
        <Header as='h2' floated='left'>
            MY ACTIVITY EXPENSE TRACKER PORTAL
        </Header>
        <Header as='h2' floated='right'>
            AS
        </Header>
    </Segment>
);

export default AppHeader;