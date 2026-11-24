import React from "react";
import PreShipment from "../../../asstes/img/service/Pre-Shipment.png";
import SurveyCertificationBody from "../../../asstes/img/service/Survey_Certification_Body.jpg";
import CottonControlling from "../../../asstes/img/service/Cotton_Controlling.jpg";
import Jute from "../../../asstes/img/service/Jute.webp";
import AgriculturalItems from "../../../asstes/img/service/Agricultural Items.webp";
import MarineSurvey from "../../../asstes/img/service/Marine Survey.webp";
import ReadymadeGarments from "../../../asstes/img/service/Readymade Garments.webp";

const services = [
  {
    title: "Pre-shipment",
    description:
      "Inspection and verification so goods meet the agreed requirement before they are shipped.",
    image: PreShipment,
  },
  {
    title: "Survey certification",
    description:
      "Surveying and certification for clients who need compliance checked against the relevant standard.",
    image: SurveyCertificationBody,
  },
  {
    title: "Cotton controlling",
    description:
      "Quality control for cotton, including grading consistency for international trade.",
    image: CottonControlling,
  },
  {
    title: "Jute",
    description:
      "Inspection of jute cargo with attention to grade, condition, and export readiness.",
    image: Jute,
  },
  {
    title: "Agricultural items",
    description:
      "Agricultural products checked for quality and for the conditions of export.",
    image: AgriculturalItems,
  },
  {
    title: "Marine survey",
    description:
      "Surveys of ships, cargo, and marine operations, focused on condition and safety.",
    image: MarineSurvey,
  },
  {
    title: "Readymade garments",
    description:
      "Garment inspections covering workmanship, packing, and the buyer’s specification.",
    image: ReadymadeGarments,
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading center">
          <p className="kicker">Services</p>
          <h2>What we survey</h2>
          <p>Seven lines of work, from the warehouse floor to the ship’s side.</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-media">
                <img src={service.image} alt="" />
              </div>
              <div className="service-body">
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
