import React from 'react';
import { Card, CardContent, Typography, Box, Grid, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';
import { useGetList } from 'react-admin'; 

// --- COMPOSANT POUR UNE CARTE DYNAMIQUE ---
const DynamicDashboardCard = ({ title, resource, linkTo, hasImport = true }: { title: string, resource?: string, linkTo: string, hasImport?: boolean }) => {
    
    // On demande à React-Admin de récupérer la liste pour cette ressource.
    // perPage: 1 pour aller très vite, car ce qui nous intéresse, c'est le total.
    const { total, isLoading } = useGetList(resource || '', {
        pagination: { page: 1, perPage: 1 } 
    }, { enabled: !!resource }); 

    return (
        <Card sx={{ 
            bgcolor: '#4fc3f7', 
            borderRadius: '20px', 
            height: '180px', 
            position: 'relative', 
            boxShadow: 3,
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.02)' } 
        }}>
            <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000' }}>
                    {resource ? (isLoading ? '...' : `${total || 0} ${title}`) : title}
                </Typography>
            </CardContent>
            
            {hasImport && (
                <IconButton
                    sx={{ position: 'absolute', bottom: 8, left: 8, color: '#000' }}
                    onClick={() => alert(`L'import pour ${title} n'est pas encore implémenté.`)}
                >
                    <ArrowDownwardIcon fontSize="large" />
                </IconButton>
            )}
            
            <IconButton
                component={Link}
                to={linkTo}
                sx={{ position: 'absolute', bottom: 8, right: 8, color: '#000' }}
            >
                <VisibilityIcon fontSize="large" />
            </IconButton>
        </Card>
    );
};

// --- LE TABLEAU DE BORD ---
export const AdminDashboard = () => {
    return (
        <Box sx={{ mt: 4, maxWidth: '1200px', margin: '0 auto', p: 2 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <DynamicDashboardCard title="affaires" resource="affaires" linkTo="/affaires" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <DynamicDashboardCard title="clients" resource="clients" linkTo="/clients" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <DynamicDashboardCard title="articles" resource="articles" linkTo="/articles" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <DynamicDashboardCard title="matériaux" resource="materiaux" linkTo="/materiaux" />
                </Grid>
                
                {/* 🔴 NOUVELLE CARTE AJOUTÉE ICI */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <DynamicDashboardCard title="utilisateurs" resource="utilisateur" linkTo="/utilisateur" />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <DynamicDashboardCard title="Paramètres" linkTo="/profil" hasImport={false} />
                </Grid>
            </Grid>
        </Box>
    );
};