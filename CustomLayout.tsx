import React, { useEffect } from 'react';
import { 
    Layout, AppBar, UserMenu, useSidebarState, useGetIdentity, 
    useTranslate, Logout, useNotify, Menu, useResourceDefinitions,
    useGetOne, usePermissions 
} from 'react-admin';
import { Box, Typography, MenuItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { useLocation, matchPath, Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { MyError } from './errors';


const CustomMenu = () => {
    const resources = useResourceDefinitions();
    const { permissions } = usePermissions();
    const notify = useNotify();

    const hasAccess = (resourceName: string) => {
        if (!permissions || !Array.isArray(permissions)) return false;
        return permissions.some(
            (p) => p.resource === '*' || p.resource === resourceName
        );
    };

    return (
        <Menu>
            <Menu.Item to="/" primaryText="Accueil" leftIcon={<HomeIcon />} />
            
            {Object.keys(resources).map(name => {
                // 🔴 1. On ignore la ressource "profil" (pour ne pas l'afficher en double)
                if (name.toLowerCase() === 'profil') return null;

                if (hasAccess(name)) {
                    return <Menu.ResourceItem key={name} name={name} />;
                }
                return null;
            })}

            {/* 🔴 2. On vérifie les droits sur "profil" et on pointe vers "/profil" */}
            {hasAccess('profil') ? (
                <Menu.Item 
                    to="/profil" 
                    primaryText="Paramètres" 
                    leftIcon={<SettingsIcon />} 
                />
            ) : (
                <MenuItem onClick={() => notify('custom.access_denied', { 
                    type: 'warning', 
                    messageArgs: { _: 'Accès refusé : droits administrateur requis.' } 
                })}>
                    <ListItemIcon>
                        <SettingsIcon sx={{ color: 'text.secondary' }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'text.secondary' }}>
                        Paramètres
                    </ListItemText>
                </MenuItem>
            )}
        </Menu>
    );
};

const CustomUserMenu = (props: any) => {
    const translate = useTranslate();
    const { identity } = useGetIdentity();
    
    return (
        <UserMenu {...props}>
            <Box sx={{ padding: '12px 16px', borderBottom: '1px solid #eee', mb: 1 }}>
                <Typography variant="subtitle2" color="textSecondary">
                    {translate('custom.user.welcome', { _: 'Bienvenue' })}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                    {identity?.fullName}
                </Typography>
            </Box>
            
            {/* 🔴 3. ON CHANGE LE LIEN ICI POUR ALLER VERS MON-COMPTE */}
            <MenuItem component={Link} to="/mon-compte">
                <ListItemIcon><AccountCircleIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Gestion du profil</ListItemText>
            </MenuItem>
            
            <Logout />
        </UserMenu>
    );
};

const CustomAppBar = () => {
    const [open, setOpen] = useSidebarState(); 
    const location = useLocation(); 
    
    const isAffairesList = location.pathname === '/affaires';
    const isHomePage = location.pathname === '/'; 
    
    const isAffairesCreate = location.pathname === '/affaires/create';
    
    const matchEdit = matchPath('/affaires/:id', location.pathname);
    const affaireId = matchEdit?.params?.id;
    const isAffairesEdit = !!affaireId && affaireId !== 'create';
    
    const { data: affaire } = useGetOne('affaires', { id: affaireId }, { enabled: isAffairesEdit });
    
    return (
        <AppBar userMenu={<CustomUserMenu />} sx={{ '& .RaAppBar-menuButton': { display: 'none' }, '& button[aria-label="Rafraîchir"], & button[aria-label="Refresh"]': { display: 'none' }, '& .MuiIconButton-root:has([data-testid="RefreshIcon"])': { display: 'none' } }}>
            <IconButton color="inherit" onClick={() => setOpen(!open)} sx={{ ml: 0, mr: 1, padding: 0 }}>
                <Box component="img" src="/logo.png" sx={{ height: 40, width: 'auto', borderRadius: '4px', backgroundColor: 'white', padding: '2px' }} alt="Logo" />
            </IconButton>
            {open && <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>DURAND BÉTON</Typography>}
            
            {isAffairesList && (
                <Typography variant="h6" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', textTransform: 'uppercase', display: { xs: 'none', md: 'block' } }}>
                    Liste des affaires
                </Typography>
            )}
            {isHomePage && (
                <Typography variant="h6" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', display: { xs: 'none', md: 'block' } }}>
                    Accueil
                </Typography>
            )}
            {isAffairesCreate && (
                <Typography variant="h6" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', textTransform: 'uppercase', display: { xs: 'none', md: 'block' } }}>
                    Création d'une affaire
                </Typography>
            )}
            {isAffairesEdit && affaire && (
                <Typography variant="h6" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', textTransform: 'uppercase', display: { xs: 'none', md: 'block' } }}>
                    affaire {affaire.nom} - {affaire.client}
                </Typography>
            )}
            <Box flex="1" />
        </AppBar>
    );
};

export const CustomLayout = (props: any) => {
    const [, setOpen] = useSidebarState();
    useEffect(() => { setOpen(false); }, [setOpen]); 
    return <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} error={MyError} />;
};