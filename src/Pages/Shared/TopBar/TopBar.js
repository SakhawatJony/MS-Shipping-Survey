import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const TopBar = () => {
    return (
        <Box sx={{ bgcolor: "#290218", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Container>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <Box sx={{ display: "flex", alignItems: "center", color: "white", gap: "5px" }}>
                        <Box>
                            <MailOutlineIcon sx={{ fontSize: "13px" }} />
                        </Box>
                        <Typography sx={{ fontSize: "13px" }}>
                            info@gmail.com
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center",gap:"5px"}}>
                        <FacebookIcon sx={{ color: "white",fontSize:"20px" }} />
                        <InstagramIcon sx={{ color: "white",fontSize:"20px" }}/>
                        <TwitterIcon sx={{ color: "white",fontSize:"20px" }} />
                        <LinkedInIcon sx={{ color: "white",fontSize:"20px" }} />
                    </Box>


                </Box>
            </Container>
        </Box>
    )
}

export default TopBar
