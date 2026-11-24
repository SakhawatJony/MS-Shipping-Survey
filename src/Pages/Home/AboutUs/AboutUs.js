import React from "react";
import aboutImage from "../../../asstes/img/Wingate1.jpg";

const AboutUs = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img src={aboutImage} alt="Survey vessel at sea" />
          <div className="about-badge">
            <span>Dhaka office</span>
            <strong>Uttara, Sector 12</strong>
          </div>
        </div>

        <div className="about-copy">
          <p className="kicker">About us</p>
          <h2>A quieter kind of certainty for every shipment.</h2>
          <p className="lede">
            MS Shipping Survey inspects cargo before it leaves Bangladesh. From cotton and jute to garments, agricultural goods, and marine operations, the work is to confirm that a shipment matches what the buyer was promised.
          </p>

          <div className="principle-list">
            <article className="principle">
              <h3>Our mission</h3>
              <p>
                To give clients clear, careful survey reports — high quality, practical, and written so the next decision can be made with confidence.
              </p>
            </article>
            <article className="principle">
              <h3>Our vision</h3>
              <p>
                To be the survey house shippers call when the cargo, the vessel, and the paperwork all need to agree.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
