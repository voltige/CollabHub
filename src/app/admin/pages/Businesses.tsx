import React from 'react';
import { useAdminStore } from '../store/adminStore';

const Businesses: React.FC = () => {
    const { businesses, loading, error } = useAdminStore(state => ({
        businesses: state.businesses,
        loading: state.loading,
        error: state.error,
    }));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading businesses: {error.message}</div>;

    return (
        <div>
            <h1>Liste des entreprises</h1>
            <ul>
                {businesses.map(business => (
                    <li key={business.id}>{business.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Businesses;