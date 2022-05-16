import React from 'react';
import { Icon, Tab, TabBar } from '@ui-kitten/components';

    const PersonIcon = () => (
    <Icon  name='person-outline'/>
    );

    const BellIcon = () => (
    <Icon  name='bell-outline'/>
    );

    const EmailIcon = () => (
    <Icon name='email-outline'/>
    );
    export const TabThemingShowcase = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <TabBar
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <Tab icon={PersonIcon} title='USERS'/>
        <Tab icon={BellIcon} title='ORDERS'/>
        <Tab icon={EmailIcon} title='TRANSACTIONS'/>
        </TabBar>
    );
    };