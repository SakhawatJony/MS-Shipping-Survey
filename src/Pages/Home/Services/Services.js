import { Box, Container, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import PreShipment from "../../../asstes/img/service/Pre-Shipment.png"
import SurveyCertificationBody from "../../../asstes/img/service/Survey_Certification_Body.jpg"
import CottonControlling from "../../../asstes/img/service/Cotton_Controlling.jpg"
import Jute from "../../../asstes/img/service/Jute.webp"
import AgriculturalItems from "../../../asstes/img/service/Agricultural Items.webp"
import MarineSurvey from "../../../asstes/img/service/Marine Survey.webp"
import ReadymadeGarments from "../../../asstes/img/service/Readymade Garments.webp"

const Services = () => {
    // State to hold the fetched product data
    const [products, setProducts] = useState([]);

    // Simulate fetching product data (replace with real API call)
    useEffect(() => {
        const fetchProducts = async () => {
            // Replace this JSON with your real API call or local data
            const productData = [
                {
                    title: "Pre-Shipment",
                    description:
                        "Comprehensive inspection and verification services to ensure goods meet regulatory and client-specific requirements before shipment.",
                    image: PreShipment,
                },
                {
                    title: "Survey Certification Body",
                    description:
                        "Professional surveying and certification solutions to validate compliance with international standards for various industries.",
                    image: SurveyCertificationBody,
                },
                {
                    title: "Cotton Controlling",
                    description:
                        "Expert quality control for cotton to ensure consistent grading and adherence to international trade standards.",
                    image: CottonControlling,
                },
                {
                    title: "Jute",
                    description:
                        "Premium-grade jute products with focus on sustainability and quality for global markets.",
                    image: Jute,
                },
                {
                    title: "Agricultural Items",
                    description:
                        "A wide range of agricultural products inspected for quality and compliance with export standards.",
                    image:AgriculturalItems,
                },
                {
                    title: "Marine Survey",
                    description:
                        "Reliable marine survey services to inspect ships, cargo, and marine operations for safety and performance.",
                    image: MarineSurvey,
                },
                {
                    title: "Readymade Garments",
                    description:
                        "Quality readymade garments ensuring superior stitching, durability, and adherence to international fashion standards.",
                    image: ReadymadeGarments,
                },
            ];
            setProducts(productData);
        };

        fetchProducts();
    }, []);

    return (
        <Box>
            <Box sx={{ pt: 2, pb: 5, px: 3, backgroundColor: "#f9f9f9" }}>
                <Container>
                    {/* Title */}
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#5c0837",
                                textTransform: "capitalize",
                                letterSpacing: 2,
                            }}
                        >
                            Our Products
                        </Typography>
                        <Divider
                            sx={{
                                width: "80px",
                                height: "2px",
                                backgroundColor: "#5c0837",
                                mx: "auto",
                                mt: 1,
                            }}
                        />
                    </Box>

                    {/* Products Section */}
                    <Grid container spacing={5} sx={{ mt: 4 }}>
                        {products?.map((product, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        backgroundColor: "#fff",
                                        p: 2,
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                        border: "1px solid #5c0837",
                                        height:"295px"
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            width: "90%",
                                            height: "150px",
                                            marginBottom: "12px",
                                        }}
                                    />
                                    <Typography
                                      
                                        sx={{ fontSize:"17px", fontWeight: 600, color: "#5c0837", mb: 1 }}
                                    >
                                        {product?.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#555",
                                            fontSize: "13px",
                                            
                                            mb: 1,
                                        }}
                                    >
                                        {product?.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#5c0837",
                                            color: "#fff",
                                            textTransform: "none",
                                            "&:hover": {
                                                backgroundColor: "#4a072d",
                                            },
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Services;
