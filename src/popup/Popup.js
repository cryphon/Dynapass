import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import ChatIcon from '@mui/icons-material/Chat';


function Popup() {
    const [selectedText, setSelectedText] = useState('');
    const [selected, setSelected] = useState('');


    const handleSelection = (event, newSelection) => {
       console.log(newSelection); 
    };

    useEffect(() => {
        console.log('Popup component mounted');
        const text = window.getSelection().toString().trim();
        console.log('Selected text:', text);
        setSelectedText(text);
    }, []);

    return (
        <Box
        sx={{
            display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 1,
                borderRadius: 1,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Roboto Mono, sans-serif',
                fontSize: '0.875rem',
        }}
        >
        <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleSelection}
        sx={{
            bgcolor: '#212121',
                borderRadius: 1,
                textTransform: 'none',
        }}>
        <ToggleButton
        value="option 1"
        sx={{
            color: '#cbecec',
                textTransform: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                    bgcolor: '#2f2f2f',
                    color: '#ece6d5',
                },
        }}>
        <ChatIcon sx={{ marginRight: 1 }} />
        ask chatGPT
        </ToggleButton>
        <ToggleButton
        value="option 2"
        sx={{
            color: '#cbecec',
                textTransform: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                    bgcolor: '#2f2f2f',
                },
        }}>
        <GoogleIcon sx={{ marginRight: 1 }} />
        ask Google
        </ToggleButton>
        <ToggleButton
        value="option 3"
        sx={{
            color: '#cbecec',
                textTransform: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                    bgcolor: '#2f2f2f',
                    color: '#ece6d5',
                },
        }}>
        ask Do something
        </ToggleButton>

        </ToggleButtonGroup>

        </Box>
    );
}

ReactDOM.render(<Popup />, document.getElementById('popup-root'));
