import React, { useEffect, useState } from "react";
import {
  nextTrackId,
  productOptions,
  readCertificates,
  statusOptions,
  writeCertificates,
} from "../Certificate/certificateStore";
import ProductList from "./ProductList";
import "./Products.css";

const emptyForm = (track) => ({
  no: "",
  track,
  date: new Date().toISOString().slice(0, 10),
  status: "Valid",
  client: "",
  product: productOptions[0],
  doc: "",
});

const Products = () => {
  const [certificates, setCertificates] = useState(() => readCertificates());
  const [form, setForm] = useState(() => emptyForm(nextTrackId(readCertificates())));
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Products | Shipping Survey & Inspection Services";
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const no = form.no.trim();
    const client = form.client.trim();
    const doc = form.doc.trim();

    if (!no || !client || !form.date || !form.track.trim()) {
      setError("Enter the certificate number, client, issue date, and track ID.");
      return;
    }
    if (doc && !/^https?:\/\//i.test(doc)) {
      setError("The document link must start with http:// or https://.");
      return;
    }

    const certificate = {
      id: `${Date.now()}`,
      no,
      track: form.track.trim(),
      date: form.date,
      status: form.status,
      client,
      product: form.product,
      doc,
    };
    const next = [certificate, ...certificates];
    writeCertificates(next);
    setCertificates(next);
    setForm(emptyForm(nextTrackId(next)));
    setError("");
  };

  return (
    <div className="products-page">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>Add a product</h2>
        <p>Saving a certificate builds a QR code. Opening that code shows these details.</p>

        <label htmlFor="cert-no">Certificate no.</label>
        <input id="cert-no" name="no" value={form.no} onChange={updateField} placeholder="24040163" />

        <label htmlFor="cert-track">Track ID</label>
        <input id="cert-track" name="track" value={form.track} onChange={updateField} />

        <div className="product-row">
          <div>
            <label htmlFor="cert-date">Issue date</label>
            <input id="cert-date" name="date" type="date" value={form.date} onChange={updateField} />
          </div>
          <div>
            <label htmlFor="cert-status">Current status</label>
            <select id="cert-status" name="status" value={form.status} onChange={updateField}>
              {statusOptions.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        <label htmlFor="cert-client">Client</label>
        <input id="cert-client" name="client" value={form.client} onChange={updateField} placeholder="M/S Afran Motors" />

        <label htmlFor="cert-product">Item / Product</label>
        <select id="cert-product" name="product" value={form.product} onChange={updateField}>
          {productOptions.map((product) => (
            <option key={product}>{product}</option>
          ))}
        </select>

        <label htmlFor="cert-doc">Document link</label>
        <input
          id="cert-doc"
          name="doc"
          value={form.doc}
          onChange={updateField}
          placeholder="Optional https:// link to the file"
        />

        {error ? <p className="product-error">{error}</p> : null}
        <button className="product-save" type="submit">Save and generate QR</button>
      </form>

      <ProductList items={certificates} onChange={setCertificates} />
    </div>
  );
};

export default Products;
