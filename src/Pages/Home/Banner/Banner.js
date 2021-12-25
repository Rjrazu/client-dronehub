import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

// this is a simple banner component
const Banner = () => {
    const style = {fontFamily:'Jost, sans-serif' , fontWeight:'500'}
    return (
        <div className="banner">
          <Container>
            <Grid container className="py-5">
                <Grid item xs={12} md={7}>
                    <Typography variant="h2" sx={style} >We have all the </Typography> 
                    <Typography variant="h2" sx={style} gutterBottom>Exclusive and Brand New Collection</Typography> 
                    <Typography variant="h6" gutterBottom  component="div" sx={{fontFamily:'Jost, sans-serif'}}>Dronehub helps companies with large infrastructure to reduce monitoring costs, get real-time aerial data, and exclude the human factor.</Typography> 
                    <button className="button"><Link to="/explore">Explore</Link></button>
                </Grid>
                <Grid item xs={12} md={5}></Grid>
            </Grid>
          </Container>
        </div>
    );
};

export default Banner;