import React from 'react';
import { Button, CssBaseline, Container, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import logo from './logo.svg';
import './App.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                My Chrome extension
            </Typography>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
        </Container>
    </ThemeProvider>
  );
}

export default App;
