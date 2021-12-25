import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

// this is a static about us component
const AboutUs = () => {
    return (
        <Container className="my-5 py-5">
            <Box>
                <Grid container spacing={4} className="align-items-center">
                    <Grid item xs={12} md={4}>
                    <Typography variant='h5' gutterBottom style={{fontFamily:'Jost, sans-serif'}}>
                            About US 
                    </Typography>
                    <Typography variant='h3' gutterBottom style={{fontFamily:'Jost, sans-serif'}}>
                        HOW YOUR FAVOURITE DRONE HUB! STARTED 
                    </Typography>
                    <Typography variant='p' component="div" gutterBottom  style={{fontFamily:'Jost, sans-serif'}} className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere ipsum reprehenderit perferendis. Eius autem voluptas magnam temporibus vel laboriosam. Sit placeat, ipsam libero consectetur illo asperiores adipisci qui in, nam deleniti possimus expedita odio quas? Voluptates libero repellat dolorem debitis deserunt. Minus reprehenderit vel facilis obcaecati quibusdam cumque repudiandae, tempora excepturi accusantium ex illum at eum consequatur corporis minima modi, suscipit ea in.
                    </Typography>
                   <button className="button3">
                        <Link to='/explore'>Shop Now</Link>
                   </button>
                   </Grid>
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/hMM5MdC/carpenter-posing-on-his-workplace-in-carpentry-workshop-e1635258960967-727x1024.jpg" alt="" className="img-fluid" />
                        <div className="text-center mt-3">
                            <h4>Json Walker</h4>
                            <h5>Owner</h5>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/mF6cLCR/modern-artisan-posing-in-workshop-e1635260600632.jpg" alt="" className="img-fluid" />
                        <div className="text-center mt-3">
                            <h4>Albert Roger</h4>
                            <h5>Advisor</h5>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;