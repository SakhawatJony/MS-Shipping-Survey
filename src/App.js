<<<<<<< HEAD
import { useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./Pages/Shared/TopBar/TopBar";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Dashboard from "./Pages/Admin/Dashboard";
import CertificateView from "./Pages/Certificate/CertificateView";

function PublicSite() {
  useEffect(() => {
    document.title = "Shipping Survey & Inspection Services";
  }, []);

  return (
    <Box className="app-shell">
      <header className="site-header">
        <TopBar />
        <NavBar />
      </header>
=======
import { Box, Typography } from "@mui/material";
import TopBar from "./Pages/Shared/TopBar/TopBar";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Box>
      <TopBar />
      <NavBar />
>>>>>>> 046ae668174e85270d93384364173162040c96f1
      <Home />
    </Box>
  );
}

<<<<<<< HEAD
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Dashboard />} />
        <Route path="/admin/services" element={<Dashboard />} />
        <Route path="/admin/enquiries" element={<Dashboard />} />
        <Route path="/c/:token" element={<CertificateView />} />
        <Route path="/*" element={<PublicSite />} />
      </Routes>
    </BrowserRouter>
  );
}

=======
>>>>>>> 046ae668174e85270d93384364173162040c96f1
export default App;
