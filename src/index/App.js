import React from 'react';
import ReactDOM from 'react-dom';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';
import { CssBaseline, Button, Typography, Box, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { SettingsIcon } from '@mui/icons-material';

const actions = [
    { icon: <SettingsIcon />, name: 'Settings' },
]

export default function SpeedDialTooltipOpen() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
}

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                width: 400,
                height: 500,
            }}>
            <CssBaseline />
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial menu"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open} >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            toolTipOpen
                            onClick={handleClose}
                        />
                    ))}
            </SpeedDial>
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
