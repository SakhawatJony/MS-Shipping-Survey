import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../asstes/img/ssis-logo.png";
import PreShipment from "../../asstes/img/service/Pre-Shipment.png";
import SurveyCertificationBody from "../../asstes/img/service/Survey_Certification_Body.jpg";
import CottonControlling from "../../asstes/img/service/Cotton_Controlling.jpg";
import Jute from "../../asstes/img/service/Jute.webp";
import AgriculturalItems from "../../asstes/img/service/Agricultural Items.webp";
import MarineSurvey from "../../asstes/img/service/Marine Survey.webp";
import ReadymadeGarments from "../../asstes/img/service/Readymade Garments.webp";
import Products from "./Products";
import ProductList from "./ProductList";
import { readCertificates } from "../Certificate/certificateStore";
import "./Dashboard.css";

const services = [
  { title: "Pre-shipment", image: PreShipment, note: "Check goods before they leave." },
  { title: "Survey certification", image: SurveyCertificationBody, note: "Match the relevant standard." },
  { title: "Cotton controlling", image: CottonControlling, note: "Grade and condition for export." },
  { title: "Jute", image: Jute, note: "Grade, condition, and readiness." },
  { title: "Agricultural items", image: AgriculturalItems, note: "Quality before the cargo moves." },
  { title: "Marine survey", image: MarineSurvey, note: "Ships, cargo, and operations." },
  { title: "Readymade garments", image: ReadymadeGarments, note: "Workmanship and packing." },
];

const nav = [
  { label: "Overview", to: "/admin/dashboard" },
  { label: "Services", to: "/admin/services" },
  { label: "Products", to: "/admin/products" },
  { label: "Enquiries", to: "/admin/enquiries" },
];

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [productCount, setProductCount] = useState(() => readCertificates().length);
  const section = pathname.startsWith("/admin/products")
    ? "Products"
    : pathname.startsWith("/admin/services")
      ? "Services"
      : pathname.startsWith("/admin/enquiries")
        ? "Enquiries"
        : "Overview";

  useEffect(() => {
    const title = section === "Overview" ? "Dashboard" : section;
    document.title = `${title} | Shipping Survey & Inspection Services`;
  }, [section]);

  useEffect(() => {
    if (section === "Overview") setProductCount(readCertificates().length);
  }, [section]);

  return (
    <div className="desk">
      <aside className="desk-side">
        <Link className="desk-brand" to="/">
          <img src={logo} alt="Shipping Survey & Inspection Services" />
        </Link>
        <p className="desk-kicker">Survey desk</p>
        <nav>
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/admin/dashboard"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="desk-signout" to="/admin">Sign out</Link>
      </aside>

      <main className="desk-main">
        <header className="desk-top">
          <div>
            <p className="desk-kicker">Uttara office</p>
            <h1>{section}</h1>
          </div>
          <a className="desk-site" href="/">View website</a>
        </header>

        {section === "Overview" && (
          <>
            <section className="desk-stats">
              <article>
                <span>Services</span>
                <strong>7</strong>
                <p>Lines of survey work on the public site.</p>
              </article>
              <article>
                <span>Office</span>
                <strong>Uttara</strong>
                <p>Sector 12, Priyanka City, Dhaka.</p>
              </article>
              <article>
                <span>Hours</span>
                <strong>Sun–Thu</strong>
                <p>9AM – 6PM at the survey desk.</p>
              </article>
              <article>
                <span>Products</span>
                <strong>{productCount}</strong>
                <p>Certificates saved on this browser.</p>
              </article>
            </section>

            <ProductList
              onAdd={() => navigate("/admin/products")}
              onChange={() => setProductCount(readCertificates().length)}
            />

            <section className="desk-split">
              <div className="desk-card">
                <h2>Services on the site</h2>
                <ul className="desk-list">
                  {services.map((service, index) => (
                    <li key={service.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{service.title}</strong>
                        <p>{service.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="desk-card desk-contact">
                <h2>Reach the desk</h2>
                <p>H 20, Lutfunnesa Road, Priyanka City, Sector 12, Uttara, Dhaka.</p>
                <a href="mailto:hasansit48@gmail.com">hasansit48@gmail.com</a>
                <a href="tel:+8801950090248">+880 1950-090248</a>
              </div>
            </section>
          </>
        )}

        {section === "Services" && (
          <section className="desk-services">
            {services.map((service) => (
              <article key={service.title}>
                <img src={service.image} alt="" />
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.note}</p>
                </div>
              </article>
            ))}
          </section>
        )}

        {section === "Products" && <Products />}

        {section === "Enquiries" && (
          <section className="desk-empty">
            <p className="desk-kicker">Inbox</p>
            <h2>No enquiries yet</h2>
            <p>When a client writes from the website, the request will show here.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
