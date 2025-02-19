import React from 'react';

const Dashboard: React.FC = () => {
    // Simulated data for demonstration
    const stats = {
        totalUsers: 120,
        totalBusinesses: 45,
        totalContent: 300,
        activeSessions: 15,
    };

    return (
        <div>
            <h1>Tableau de bord</h1>
            <div>
                <h2>Statistiques clés</h2>
                <ul>
                    <li>Utilisateurs totaux: {stats.totalUsers}</li>
                    <li>Entreprises totales: {stats.totalBusinesses}</li>
                    <li>Contenu total: {stats.totalContent}</li>
                    <li>Sessions actives: {stats.activeSessions}</li>
                </ul>
            </div>
            <div>
                <h2>Activité récente</h2>
                {/* Placeholder for recent activity */}
                <p>Aucune activité récente à afficher.</p>
            </div>
        </div>
    );
};

export default Dashboard;