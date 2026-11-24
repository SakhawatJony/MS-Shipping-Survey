import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
};

export default Banner;
