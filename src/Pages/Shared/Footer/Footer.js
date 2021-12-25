import { Container } from '@mui/material';
import React from 'react';

// this is a simple footer component
const Footer = () => {
    return (
        <div className="bg-dark text-light text-center">
            <Container className="py-3">
                <h1>DRONE HUB</h1>
                <h3>WE ENSURE THE BESL QUALITY</h3>
                <p>&copy; All Rights Reserved By DRONE HUB!</p>
            </Container>
        </div>
    );
};

export default Footer;