import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import fotterImg from "../../../asstes/img/fotter.png"
import icons1 from "../../../asstes/img/Path.png"
import icons2 from "../../../asstes/img/circel.png"
import icons3 from "../../../asstes/img/twitter.png"
import icons4 from "../../../asstes/img/instragram.png"
import SendIcon from '@mui/icons-material/Send';

const Fotter = () => {
    return (
        <Box sx={{ bgcolor: "#263238", height: "200px",py:"60px" }}>
            <Container>
                <Grid container>
                    <Grid md={4}>
                        <img src={fotterImg} />
                        <Box sx={{ py: "25px" }}>
                            <Typography sx={{ fontSize: "14px", color: "white" }}>Copyright © 2020 Landify UI Kit.<br /><Typography sx={{ py: "5px" }}>All rights reserved</Typography></Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <Box sx={{ bgcolor: "#3c464c", height: "35px", width: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                <img src={icons4} />
                            </Box>
                            <Box sx={{ bgcolor: "#3c464c", height: "35px", width: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                <img src={icons2} />
                            </Box>
                            <Box sx={{ bgcolor: "#3c464c", height: "35px", width: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                <img src={icons3} />
                            </Box>
                            <Box sx={{ bgcolor: "#3c464c", height: "35px", width: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                <img src={icons1} />
                            </Box>

                        </Box>
                    </Grid>
                    <Grid md={8}>
                        <Grid container>
                            <Grid item md={4}>
                                <Box>
                                    <Typography sx={{ color: "var(--white-color)", fontWeight: 600, fontSize: "20px" }}>
                                        Company
                                    </Typography>
                                </Box>
                                <Box sx={{ pt: "25px", display: "flex", flexDirection: "column", gap: "15px" }}>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>About us</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Blog</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Contact us</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Pricing</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Testimonials</Typography>
                                </Box>

                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Typography sx={{ color: "var(--white-color)", fontWeight: 600, fontSize: "20px" }}>
                                        Support
                                    </Typography>
                                </Box>
                                <Box sx={{ pt: "25px", display: "flex", flexDirection: "column", gap: "15px" }}>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Help center</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Terms of service</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Legal</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Privacy policy</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "var(--white-color)" }}>Status</Typography>
                                </Box>

                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Typography sx={{ color: "var(--white-color)", fontWeight: 600, fontSize: "20px" }}>
                                        Stay up to date
                                    </Typography>
                                </Box>
                                <Box sx={{ pt: "25px", display: "flex", flexDirection: "column", gap: "15px" }}>
                                    <Box sx={{ bgcolor: "#515b60", height: "30px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", px: "10px" }}>
                                        <Typography sx={{ fontSize: "12px", color: "#D9DBE1" }}>Your Email Address</Typography><Typography><SendIcon sx={{ transform: "rotate(300deg)", color: "#D9DBE1" }} /></Typography>
                                    </Box>
                                </Box>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Container>


        </Box>
    );
}

export default Fotter;
