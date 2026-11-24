import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import "../../hero.css";
import pic1 from "../../asstes/img/Doo_Sung.jpg";
import pic2 from "../../asstes/img/Wingate1.jpg";
import pic3 from "../../asstes/img/Gr_TS_FO.jpg";

const slides = [
  {
    image: pic1,
    kicker: "Marine & cargo survey",
    title: "Inspection before the cargo sails.",
    description: "Independent surveys for vessels, shipments, and the commodities leaving Bangladesh.",
  },
  {
    image: pic2,
    kicker: "Pre-shipment",
    title: "Checked against the buyer’s standard.",
    description: "Quantity, condition, and packing reviewed before goods are released for export.",
  },
  {
    image: pic3,
    kicker: "Commodity control",
    title: "Cotton, jute, garments, and more.",
    description: "A survey desk covering agricultural cargo, textiles, and marine operations.",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5600,
    speed: 700,
    fade: true,
    arrows: false,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="hero" id="home" aria-label="Featured surveys">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.title}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-overlay" />
              <div className="container hero-content">
                <div className="hero-copy">
                  <p className="kicker">
                    <span className="hero-index">0{index + 1}</span>
                    {slide.kicker}
                  </p>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="hero-actions">
                    <a className="btn btn-gold" href="#services">View services</a>
                    <a className="btn btn-ghost" href="#contact">Talk to a surveyor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
=======
import pic1 from "../../asstes/img/Doo_Sung.jpg";
import pic2 from "../../asstes/img/Wingate1.jpg";
import pic3 from "../../asstes/img/Gr_TS_FO.jpg";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,         // Enables autoplay
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slides = [
        { image: pic1, title: "Discover New Horizons", description: "Explore the world with us.", buttonText: "Explore Now" },
        { image: pic2, title: "Adventures Await", description: "Plan your next great adventure.", buttonText: "Learn More" },
        { image: pic3, title: "Create Memories", description: "Cherish moments that last forever.", buttonText: "Get Started" },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <Box
                        sx={{
                            height: "500px",
                            width: "100%",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                                color: "#fff",
                                // backgroundColor: "rgba(0, 0, 0, 0.5)",
                                padding: "20px",
                                borderRadius: "8px",
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                {slide.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {slide.description}
                            </Typography>
                            <Button
                                sx={{ mt: 2, bgcolor: "#5c0837", color: "white", textTransform: "capitalize", width: "150px", fontSize: "15px" }}
                            >
                                {slide.buttonText} <ArrowForwardIcon sx={{ pl: "5px" }} />
                            </Button>
                        </Box>
                    </Box>
                </div>
            ))}
        </Slider>
    );
>>>>>>> 046ae668174e85270d93384364173162040c96f1
};

export default Banner;
