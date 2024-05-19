// src/pages/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../../Componenet/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />

            <main>
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Welcome to My MUI App
                    </Typography>
                    <Typography variant="body1">
                        This is the home page. Add your content here.
                    </Typography>
                </Container>
            </main>
        </>
    );
};

export default Home;
