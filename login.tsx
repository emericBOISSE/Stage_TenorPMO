import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, useTranslate } from 'react-admin';
import { TextField, Button, Typography, Box } from '@mui/material';

const MyLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const translate = useTranslate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login({ username, password }).catch(() =>
            notify('ra.auth.sign_in_error', { type: 'warning' })
        );
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f6f8' }}>
            <Box 
                component="form"
                onSubmit={handleSubmit}
                sx={{ 
                    padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', 
                    width: '100%', maxWidth: '350px', backgroundColor: 'white', 
                    borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
                }}
            >
                <Typography variant="h5" sx={{ textAlign: 'center', mb: 1, color: '#333', fontWeight: 'bold' }}>
                    {translate('custom.login.title')}
                </Typography>
                
                <TextField
                    label={translate('custom.login.username')}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                
                <TextField
                    label={translate('custom.login.password')}
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                
                <Button 
                    type="submit" 
                    variant="contained" 
                    size="large"
                    sx={{ mt: 2, py: 1.5, fontWeight: 'bold', textTransform: 'none', fontSize: '16px' }}
                >
                    {translate('custom.login.submit')}
                </Button>
            </Box>
        </Box>
    );
};

export default MyLoginPage;