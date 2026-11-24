import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../asstes/img/ssis-logo.png";
import { decodeCertificate, formatIssueDate } from "./certificateStore";
import "./CertificateView.css";

const CertificateView = () => {
  const { token } = useParams();
  const certificate = decodeCertificate(token);

  useEffect(() => {
    document.title = certificate
      ? `Certificate ${certificate.no} | Shipping Survey & Inspection Services`
      : "Certificate | Shipping Survey & Inspection Services";
  }, [certificate]);

  if (!certificate) {
    return (
      <main className="cert-page">
        <section className="cert-card cert-missing">
          <img src={logo} alt="Shipping Survey & Inspection Services" />
          <h1>This certificate link is not valid</h1>
          <p>The QR code does not contain a certificate this desk can open.</p>
          <Link to="/">Back to the website</Link>
        </section>
      </main>
    );
  }

  const issued = formatIssueDate(certificate.date);
  const statusClass = String(certificate.status || "Valid").toLowerCase();

  return (
    <main className="cert-page">
      <article className="cert-card">
        <header className="cert-head">
          <img src={logo} alt="" />
          <div>
            <p>Certificate no.</p>
            <h1>{certificate.no}</h1>
            <span>Track ID: {certificate.track}</span>
          </div>
        </header>

        <div className="cert-body">
          <p className="cert-label">Issue date</p>
          <p className="cert-value">{issued}</p>

          <p className="cert-label">Current status</p>
          <p className={`cert-status is-${statusClass}`}>{certificate.status}</p>

          <p className="cert-line">
            Certificate No. {certificate.no} {certificate.client}
          </p>

          {certificate.doc ? (
            <a className="cert-download" href={certificate.doc} target="_blank" rel="noreferrer">
              Download Document
            </a>
          ) : null}

          <p className="cert-label">Item / Product</p>
          <p className="cert-value">{certificate.product}</p>

          <h2>Status history</h2>
          <div className="cert-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Tracking No.</th>
                  <th>Status Date</th>
                  <th>Last Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{certificate.no}</td>
                  <td>{issued}</td>
                  <td>{certificate.status}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="cert-foot">
            Shipment created by M/S. Shipping Survey &amp; Inspection Services
          </p>
        </div>
      </article>
    </main>
  );
};

export default CertificateView;
