import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{backgroundColor:'#F34A76', color:'white'}}>
            <Container sx={{py:4}}>
                <Grid container spacing={1}>
                    <Grid item md={4}>
                        <Typography>
                            <h5>Contact Us</h5>
                            <h6>Phone: +8801648308424</h6>
                            <h6>Email: 9abdurrahman2020@gmail.com</h6>
                            <h6>Location: Mohamaya,Chandpur. <br /> Dhaka BD</h6>
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Typography variant="h6">
                                    Company
                                </Typography>
                                <Typography>
                                    About
                                </Typography>
                                <Typography>
                                    Project
                                </Typography>
                                <Typography>
                                    Our Team
                                </Typography>
                                <Typography>
                                    Terms Conditions
                                </Typography>
                                <Typography>
                                    Submit Listing
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6">
                                    Quick Links
                                </Typography>
                                <Typography>
                                    Quick Links
                                </Typography>
                                <Typography>
                                    Rentals
                                </Typography>
                                <Typography>
                                    Sales 
                                </Typography>
                                <Typography>
                                    Contact 
                                </Typography>
                                <Typography>
                                    Our blog 
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h6">
                            About us
                        </Typography>
                        <p>
                        We believe that childhood should be unplugged. It’s why we carry a beautiful array of organic toys for baby, toddler, and child that combine the safety of organic materials and the knowledge that the toys your child is playing with are healthy for them and the environment. By choosing organic toys for your child, you won’t have to wonder which dangerous man made chemical is lurking beneath the surface. Shop from our vast assortment of organic toys by brands such as Hazel Village, Kathe Kruse, and many more.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;