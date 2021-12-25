import { Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './review.css';
// this component shows the review 
const Reviews = () => {
    const [reviews, setReviews] = useState([])

    //load all the reviews
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Box className="review">
            <Container className="my-5">
            <Typography variant="h3" gutterBottom style={{fontFamily:'Jost, sans-serif' , fontWeight:"500" }} className="text-center ">Customers Reviews</Typography>
            <Grid container spacing={3} className='text-center'>
                {
                    reviews.map(review => <Grid key={review._id} item xs={12} md={4}>
                        <Box  className=" p-3 h-100 single-review " >
                        <Rating name="read-only" value={parseInt(review.rate)} readOnly />
                        <p> {review.description}</p>
                        <p> - {review.name}</p>
                        </Box>
                    </Grid>)
                }
            </Grid>
        </Container>
        </Box>
    );
};

export default Reviews;