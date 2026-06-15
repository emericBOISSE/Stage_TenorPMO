import React from 'react';
import { Admin, Resource, CustomRoutes, defaultTheme } from 'react-admin';
import { Route } from 'react-router-dom';
import { createTheme } from '@mui/material';
import polyglotI18nProvider from 'ra-i18n-polyglot';

// Imports des traductions
import { fr } from '../i18n/fr';
import { en } from '../i18n/en';

// Imports des composants techniques
import { authProvider } from '../providers/authProvider';
import { CustomLayout } from '../components/CustomLayout';
import { HomeDispatcher } from '../components/HomeDispatcher';
import { MyCatchAll } from '../components/errors';
import MyLoginPage from '../components/login';

// Imports des pages métiers
import { AffairesList } from '../components/AffairesList';
import { AffairesCreate } from '../components/AffairesCreate';
import { AffairesEdit } from '../components/AffairesEdit';
import { SousAffairesList } from '../components/SousAffairesList'; 
import { ClientsList } from '../components/ClientsList';
import { ClientsCreate } from '../components/ClientsCreate'; 
import { ClientsEdit } from '../components/ClientsEdit';
import { UserProfile } from '../components/UserProfile';   
import { ArticlesList } from '../components/ArticlesList';
import { ArticlesEdit } from '../components/ArticlesEdit';
import { MateriauxList, MateriauxCreate, MateriauxEdit } from '../components/Materiaux';
import { RegardsCreate, RegardsEdit } from '../components/RegardsForm';
import { ProfilsList, ProfilsCreate, ProfilsEdit } from '../components/ProfilsList';

// 🔴 IMPORTS MIS À JOUR POUR L'UTILISATEUR
import { UtilisateurList, UtilisateurCreate, UtilisateurEdit } from '../components/Utilisateurs';

// Imports des icônes
import PeopleIcon from '@mui/icons-material/People';      
import InventoryIcon from '@mui/icons-material/Inventory'; 
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 
import BuildIcon from '@mui/icons-material/Build'; 
import SettingsIcon from '@mui/icons-material/Settings'; 

// ajouts d'Olivier
import dataProvider from "../providers/dataProvider";
// fin ajouts d'Olivier

// Configuration de la langue
const i18nProvider = polyglotI18nProvider(locale => (locale === 'en' ? en : fr), 'fr');

// --- THÈME PERSONNALISÉ ET HARMONISÉ ---
const myTheme = createTheme({ 
    ...defaultTheme, 
    components: { 
        ...defaultTheme.components, 
        // STYLE GLOBAL DES BOUTONS
        MuiButton: {
            defaultProps: {
                variant: 'contained', 
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: '20px', 
                    textTransform: 'none', 
                    fontWeight: 'bold',
                    padding: '6px 20px',
                },
            },
        },
        MuiTextField: { 
            defaultProps: { variant: 'outlined', margin: 'normal', fullWidth: true } 
        } 
    } 
});

const myDarkTheme = createTheme({ ...myTheme, palette: { mode: 'dark' } });

export const App = () => (
    <Admin 
        dataProvider={dataProvider} 
        authProvider={authProvider}
        dashboard={HomeDispatcher} 
        i18nProvider={i18nProvider}
        loginPage={MyLoginPage}
        layout={CustomLayout} 
        theme={myTheme}
        darkTheme={myDarkTheme}
        catchAll={MyCatchAll}
    >
        {/* Routes personnalisées hors ressources */}
        <CustomRoutes>
            <Route path="mon-compte" element={<UserProfile />} />
            <Route path="/sous-affaires/:parentId" element={<SousAffairesList />} />
        </CustomRoutes>

        {/* Définition des ressources avec gestion des permissions */}
        {permissions => (
            <>
                <Resource 
                    name="clients" 
                    list={ClientsList} 
                    create={ClientsCreate} 
                    edit={ClientsEdit} 
                    options={{ label: 'custom.menu.clients' }} 
                    icon={PeopleIcon} 
                />
                
                <Resource 
                    name="articles" 
                    list={ArticlesList}
                    edit={ArticlesEdit} 
                    options={{ label: 'custom.menu.articles' }} 
                    icon={InventoryIcon} 
                />
                
                <Resource 
                    name="affaires" 
                    list={AffairesList} 
                    create={AffairesCreate}
                    edit={AffairesEdit} 
                    options={{ label: 'custom.menu.affaires' }} 
                    icon={BusinessCenterIcon} 
                />
                
                <Resource 
                    name="materiaux" 
                    list={MateriauxList} 
                    create={MateriauxCreate}
                    edit={MateriauxEdit}
                    options={{ label: 'Matériaux' }} 
                    icon={BuildIcon}
                />

                <Resource 
                    name="regards" 
                    create={RegardsCreate}
                    edit={RegardsEdit}
                />

                <Resource 
                    name="profil" 
                    list={ProfilsList} 
                    create={ProfilsCreate}
                    edit={ProfilsEdit}
                    options={{ label: 'Paramètres' }} 
                    icon={SettingsIcon} 
                />
                
                {/* 🔴 RESSOURCE UTILISATEUR COMPLÈTE */}
                <Resource 
                    name="utilisateur" 
                    options={{ label: 'Utilisateurs' }}
                    list={UtilisateurList} 
                    create={UtilisateurCreate}
                    edit={UtilisateurEdit}
                />
            </>
        )}
    </Admin>
);