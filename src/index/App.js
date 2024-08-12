import React from 'react';
import ReactDOM from 'react-dom';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';
import { CssBaseline, Button, Typography } from '@mui/material';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                width: 400,
                height: 500,
            }}>
            <CssBaseline />
            <Typography variant="h4" gutterBottom>
                {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
            </Typography>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
                Toggle Theme
            </Button>
        </div>
    );
};

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('panel-root')
);
