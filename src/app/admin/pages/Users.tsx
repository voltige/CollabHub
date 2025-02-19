import React from 'react';
import UserManagement from '../components/UserManagement';

const Users: React.FC = () => {
    return (
        <div>
            <h1>Gestion des Utilisateurs</h1>
            <UserManagement />
        </div>
    );
};

export default Users;