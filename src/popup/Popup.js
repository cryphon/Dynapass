import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Box, ButtonGroup , Button, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';


const Popup = () =>  {
    const [selectedText, setSelectedText] = useState(''); 

    const handleGoogleSearch = () => {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
        window.open(googleSearchURL, '_blank');
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
        <ButtonGroup
        variant="solid"
        buttonFlex={1}
        sx={{
            bgcolor: '#1f1f25',
                borderRadius: 1,
                textTransform: 'none', 
                maxWidth: '100%',
                resize: 'horizontal',
                '--ButtonGroup-separatorColor': 'none !important',
                '& > span': {
                    zIndex: 3,
                    background: 'linear-gradient(to top, transparent, rgba(255, 255, 255 / 0.6), transparent)',
                },
        }}> 
        <Button
        sx={{
            color: '#f3f3f3',
                textTransform: 'none',
                fontSize: '0.875rem',
        }}>
        <ChatIcon sx={{ marginRight: 1, fontSize: 16 }} />
        ask chatGPT
        </Button>
        <Divider />
        <Button
        onClick={handleGoogleSearch}
        sx={{
            color: '#f3f3f3',
                textTransform: 'none',
                fontSize: '0.875rem',
        }}>
        <GoogleIcon sx={{ marginRight: 1, fontSize: 16 }} />
        Search on Google        
        </Button>
        <Divider />
        <Button
        sx={{
            color: '#f3f3f3',
            textTransform: 'none',
        }}>
        <CloseIcon />
        </Button>
        </ButtonGroup>
        </Box>
    );
}

ReactDOM.render(<Popup />, document.getElementById('popup-root'));

