import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
    return (
        <Box sx={{ bgcolor: "#5c0837", display: "flex", alignItems: "center", justifyContent: "center", height: "50px" }}>
            <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box>
                    <Typography sx={{ color: "white" }}>lOGO HERE</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>Home</Typography></Link>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>About Us</Typography></Link>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>Service</Typography></Link>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>Contact Us</Typography></Link>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar
