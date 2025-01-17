import { Box, Typography, Divider, Grid, Container } from '@mui/material';
import React from 'react';

const AboutUs = () => {
    return (
        <Box sx={{ pt: 5, pb: 5, px: 3, backgroundColor: "#f9f9f9" }}>
            <Container>{/* About Us Title */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "#5c0837",
                            textTransform: "capitalize",
                            letterSpacing: 2
                        }}
                    >
                        About Us
                    </Typography>
                    <Divider
                        sx={{
                            width: "80px",
                            height: "2px",
                            backgroundColor: "#5c0837",
                            mx: "auto",
                            mt: 1
                        }}
                    />
                </Box>

                {/* Content Section */}
                <Box>
                    <Typography
                        sx={{
                            color: "#333",
                            fontSize: "16px",
                            lineHeight: 1.7,
                            textAlign: "center",
                            mb: 4
                        }}
                    >
                        At [Your Company Name], we strive to deliver excellence in every project we undertake. With a deep commitment to quality and customer satisfaction, we aim to create innovative solutions tailored to your needs. We take pride in our skilled team, cutting-edge technology, and a vision that inspires growth and progress.
                    </Typography>
                </Box>

                {/* Mission and Vision Section */}
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    {/* Mission */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                textAlign: "center",
                                backgroundColor: "#fff",
                                p: 3,
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 2
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: "#5c0837",
                                    mb: 2
                                }}
                            >
                                Our Mission
                            </Typography>
                            <Typography sx={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
                                To empower our clients with innovative solutions that drive success and transformation. We aim to deliver high-quality, sustainable, and customer-centric services that create lasting value.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Vision */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                textAlign: "center",
                                backgroundColor: "#fff",
                                p: 3,
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 2
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: "#5c0837",
                                    mb: 2
                                }}
                            >
                                Our Vision
                            </Typography>
                            <Typography sx={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
                                To be a global leader in delivering innovative solutions, fostering a culture of excellence, and driving positive change through technology and collaboration.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid></Container>
        </Box>
    );
};

export default AboutUs;
