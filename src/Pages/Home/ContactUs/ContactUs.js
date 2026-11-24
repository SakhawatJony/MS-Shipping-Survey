import React from "react";
import { LocationOn, Email, Phone, AccessTime } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-panel">
            <p className="kicker">Contact</p>
            <h2>Request a survey</h2>
            <p className="lede">
              Share the cargo, the vessel, or the shipment date. The desk in Uttara will take it from there.
            </p>

            <a
              className="contact-row"
              href="https://maps.app.goo.gl/E3QiLxcrkZrnEP616"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon" aria-hidden="true"><LocationOn fontSize="small" /></span>
              <span className="contact-copy">
                <strong>Location</strong>
                <span>H 20, Lutfunnesa Road, Priyanka City, Sector 12, Uttara, Dhaka, Bangladesh.</span>
              </span>
            </a>

            <a className="contact-row" href="mailto:hasansit48@gmail.com">
              <span className="contact-icon" aria-hidden="true"><Email fontSize="small" /></span>
              <span className="contact-copy">
                <strong>Email</strong>
                <span>hasansit48@gmail.com</span>
              </span>
            </a>

            <a className="contact-row" href="https://wa.me/8801950090248" target="_blank" rel="noreferrer">
              <span className="contact-icon" aria-hidden="true"><Phone fontSize="small" /></span>
              <span className="contact-copy">
                <strong>Call</strong>
                <span>+880 1950-090248</span>
              </span>
            </a>

            <div className="contact-row">
              <span className="contact-icon" aria-hidden="true"><AccessTime fontSize="small" /></span>
              <span className="contact-copy">
                <strong>Open hours</strong>
                <span>Sun–Thu, 9AM – 6PM</span>
              </span>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="Map of the Chittagong region"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.21826178962!2d91.6542203136439!3d22.35762961261376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChittagong!5e0!3m2!1sen!2sbd!4v1735222214050!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
