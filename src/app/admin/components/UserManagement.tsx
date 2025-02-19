import React, { useState, useEffect } from 'react';
import { User } from '../../../types'; // Assurez-vous que le type User est défini dans votre fichier types

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/admin/users'); // Remplacez par votre endpoint API
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des utilisateurs');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = async (newUser: User) => {
        // Logique pour ajouter un utilisateur
    };

    const handleEditUser = async (userId: string, updatedUser: User) => {
        // Logique pour modifier un utilisateur
    };

    const handleDeleteUser = async (userId: string) => {
        // Logique pour supprimer un utilisateur
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
        <div>
            <h1>Gestion des utilisateurs</h1>
            <button onClick={() => handleAddUser({ /* détails de l'utilisateur */ })}>Ajouter un utilisateur</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleEditUser(user.id, { /* détails mis à jour */ })}>Modifier</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;