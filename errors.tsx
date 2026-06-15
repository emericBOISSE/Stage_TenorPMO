import * as React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useTranslate } from 'react-admin';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// --- 1. La page 404 (Catch-All) ---
export const MyCatchAll = () => {
    const translate = useTranslate();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
            <SentimentDissatisfiedIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h4" gutterBottom>{translate('custom.errors.not_found_title')}</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                {translate('custom.errors.not_found_msg')}
            </Typography>
            <Button variant="contained" onClick={() => window.history.back()}>
                {translate('custom.errors.back')}
            </Button>
        </Box>
    );
};

// --- 2. L'écran de Crash (Error Boundary) ---
export const MyError = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void; }) => {
    const translate = useTranslate();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', p: 3, textAlign: 'center' }}>
            <ErrorOutlineIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h4" gutterBottom fontWeight="bold">
                {translate('custom.errors.crash_title')}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                {translate('custom.errors.crash_msg')}
            </Typography>
            
            {/* Affiche les détails de l'erreur uniquement en développement */}
            {process.env.NODE_ENV === 'development' && (
                <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 3, maxWidth: '600px', overflow: 'auto', textAlign: 'left' }}>
                    <Typography variant="caption" component="pre" color="error">
                        {error.message}
                    </Typography>
                </Box>
            )}
            
            <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
                {translate('custom.errors.retry')}
            </Button>
        </Box>
    );
};