import React from 'react';
import Dashboard from '../components/Dashboard';
import UserManagement from '../components/UserManagement';
import BusinessManagement from '../components/BusinessManagement';
import ContentModeration from '../components/ContentModeration';
import Settings from '../components/Settings';

const Overview: React.FC = () => {
    return (
        <div>
            <h1>Aperçu du tableau de bord</h1>
            <Dashboard />
            <UserManagement />
            <BusinessManagement />
            <ContentModeration />
            <Settings />
        </div>
    );
};

export default Overview;