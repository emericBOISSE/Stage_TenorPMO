import React, { useEffect } from 'react';
import { usePermissions, useRedirect } from 'react-admin';

// Import du tableau de bord admin
import { AdminDashboard } from './AdminDashboard'; 

export const HomeDispatcher = () => {
    const { permissions, isLoading } = usePermissions();
    const redirect = useRedirect();
    
    // 🔴 NOUVELLE VÉRIFICATION RBAC : On cherche si l'utilisateur a l'étoile '*' dans ses droits
    const isAdmin = Array.isArray(permissions) && permissions.some(p => p.resource === '*');

    useEffect(() => {
        if (isLoading) return;

        // Si ce n'est PAS un admin, on l'envoie sur la liste des affaires
        if (!isAdmin) {
            redirect('/affaires');
        }
    }, [isLoading, isAdmin, redirect]);

    // Pendant le chargement, on n'affiche rien
    if (isLoading) return null;
    
    // Si c'est l'admin, on affiche les grosses cartes bleues
    if (isAdmin) return <AdminDashboard />;
    
    return null;
};