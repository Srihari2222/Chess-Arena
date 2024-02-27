import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import backgroundImage from "./assets/background.png"


const theme = createTheme({
    palette: {
        customColor1: {
            main: '#81B64C', 
        },
        customColor2: {
            main: '#ffff',
        },
        },
    });
const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    paddingLeft: '100px',
};
const titleStyle = {
    fontSize: '5rem', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    position: 'absolute', 
    top: '4%', 
    left: '1%',
    padding: "20px 0 0 0",
    color: "whitesmoke",
    width:"500px"
};
const buttonContainerStyle = {
    padding: "250px 0 0 0",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap:'2rem',
    justifyContent: 'center',
};
const buttonStyle = {
    width: '300px',
    height: "50px",
    fontSize: "bold",
    transition: 'background-color 0.3s',
};
function Home() {
    const redirectToUrl1 = () => {
        // window.location.href = "http://localhost:3000/multiplayer"; localhost
        window.location.href = "https://chess-arena.netlify.app/multiplayer";
    };

    const redirectToUrl2 = () => {
        // window.location.href = "http://127.0.0.1:5500/index.html"; 
        window.location.href = "https://srihari2222.github.io/Chess-AI/"; 

    };

    return (
        <ThemeProvider theme={theme}>
            <div style={backgroundStyle}>
            <div style={titleStyle}> Mind Meld Chess Arena</div>
            <div style={buttonContainerStyle}>
                <Button
                    variant="contained"
                    style={{ ...buttonStyle, backgroundColor: theme.palette.customColor1.main }}
                    color="customColor1"
                    onClick={redirectToUrl1}
                    onMouseOver={e => e.target.style.backgroundColor = '#689f38'}
                    onMouseOut={e => e.target.style.backgroundColor = theme.palette.customColor1.main} 
                >
                Play with Friend
                </Button>
                <Button
                    variant="contained"
                    style={{ ...buttonStyle,backgroundColor: theme.palette.customColor2.main }}
                    color="customColor2"
                    onClick={redirectToUrl2}
                    onMouseOver={e => e.target.style.backgroundColor = '#ccc'}
                    onMouseOut={e => e.target.style.backgroundColor = theme.palette.customColor2.main}
                >
                Play with AI
                </Button>
            </div>
            </div>
        </ThemeProvider>
    );
}

export default Home;
