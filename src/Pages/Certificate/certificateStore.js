const STORAGE_KEY = "ssis-certificates";

export const productOptions = [
  "Pre-Shipment Inspection",
  "Survey certification",
  "Cotton controlling",
  "Jute",
  "Agricultural items",
  "Marine survey",
  "Readymade garments",
];

export const statusOptions = ["Valid", "Pending", "Expired"];

export function readCertificates() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

export function writeCertificates(certificates) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(certificates));
}

export function nextTrackId(certificates) {
  const year = new Date().getFullYear();
  const highest = certificates.reduce((max, certificate) => {
    const match = String(certificate.track || "").match(/-(\d+)$/);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);
  return `TRK-${year}-${String(highest + 1).padStart(4, "0")}`;
}

export function formatIssueDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${months[date.getMonth()]}-${date.getFullYear()}`;
}

export function encodeCertificate(certificate) {
  const payload = {
    no: certificate.no,
    track: certificate.track,
    date: certificate.date,
    status: certificate.status,
    client: certificate.client,
    product: certificate.product,
    doc: certificate.doc || "",
  };
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function decodeCertificate(token) {
  if (!token) return null;
  try {
    const pad = (4 - (token.length % 4)) % 4;
    const padded = token.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const payload = JSON.parse(new TextDecoder().decode(bytes));
    if (!payload.no || !payload.track || !payload.date || !payload.client || !payload.product) {
      return null;
    }
    return payload;
  } catch (error) {
    return null;
  }
}

export function certificatePath(certificate) {
  return `/c/${encodeCertificate(certificate)}`;
}
