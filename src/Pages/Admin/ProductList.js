import React, { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import {
  certificatePath,
  formatIssueDate,
  readCertificates,
  writeCertificates,
} from "../Certificate/certificateStore";

const ProductList = ({ onAdd, onChange, items }) => {
  const [owned, setOwned] = useState(() => readCertificates());
  const certificates = items || owned;
  const [copied, setCopied] = useState("");
  const [qrCodes, setQrCodes] = useState({});

  const links = useMemo(() => {
    return Object.fromEntries(
      certificates.map((certificate) => [
        certificate.id,
        `${window.location.origin}${certificatePath(certificate)}`,
      ])
    );
  }, [certificates]);

  useEffect(() => {
    let active = true;
    const entries = Object.entries(links);
    if (!entries.length) {
      setQrCodes({});
      return undefined;
    }

    Promise.all(
      entries.map(async ([id, link]) => {
        const image = await QRCode.toDataURL(link, {
          width: 180,
          margin: 1,
          errorCorrectionLevel: "M",
          color: { dark: "#1b1d72", light: "#ffffff" },
        });
        return [id, image];
      })
    ).then((images) => {
      if (active) setQrCodes(Object.fromEntries(images));
    });

    return () => {
      active = false;
    };
  }, [links]);

  const removeCertificate = (id) => {
    const next = certificates.filter((certificate) => certificate.id !== id);
    writeCertificates(next);
    if (items) {
      onChange(next);
    } else {
      setOwned(next);
      if (onChange) onChange();
    }
  };

  const copyLink = async (id) => {
    try {
      await navigator.clipboard.writeText(links[id]);
      setCopied(id);
    } catch (copyError) {
      setCopied("");
    }
  };

  return (
    <section className="all-products">
      <div className="all-products-head">
        <h2>All products</h2>
        {onAdd ? <button type="button" onClick={onAdd}>Add a product</button> : null}
      </div>

      {certificates.length === 0 ? (
        <p className="all-products-empty">No products yet. Add one and its QR code will show in this list.</p>
      ) : (
        <div className="all-products-table">
          <table>
            <thead>
              <tr>
                <th>Certificate no.</th>
                <th>Track ID</th>
                <th>Client</th>
                <th>Item / Product</th>
                <th>Issue date</th>
                <th>Status</th>
                <th>QR</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((certificate) => (
                <tr key={certificate.id}>
                  <td>
                    <strong>{certificate.no}</strong>
                    <span className="all-products-actions">
                      <a href={links[certificate.id]} target="_blank" rel="noreferrer">Open</a>
                      <button type="button" onClick={() => copyLink(certificate.id)}>
                        {copied === certificate.id ? "Copied" : "Copy link"}
                      </button>
                      {qrCodes[certificate.id] ? (
                        <a href={qrCodes[certificate.id]} download={`SSIS-${certificate.no}.png`}>Download QR</a>
                      ) : null}
                      <button type="button" onClick={() => removeCertificate(certificate.id)}>Remove</button>
                    </span>
                  </td>
                  <td>{certificate.track}</td>
                  <td>{certificate.client}</td>
                  <td>{certificate.product}</td>
                  <td>{formatIssueDate(certificate.date)}</td>
                  <td><span className={`all-products-status is-${String(certificate.status).toLowerCase()}`}>{certificate.status}</span></td>
                  <td>
                    {qrCodes[certificate.id] ? (
                      <img src={qrCodes[certificate.id]} alt={`QR code for certificate ${certificate.no}`} />
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ProductList;
