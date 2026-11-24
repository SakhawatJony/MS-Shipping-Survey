import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asstes/img/ssis-logo.png";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin login | Shipping Survey & Inspection Services";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password) {
      setError("Enter both the email and the password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    navigate("/admin/dashboard");
  };

  return (
    <main className="admin-login">
      <section className="admin-panel" aria-label="Survey desk">
        <img className="admin-logo" src={logo} alt="Shipping Survey & Inspection Services" />
        <p className="admin-kicker">Survey desk</p>
        <h1>Sign in to the admin desk.</h1>
        <p>
          Reports, enquiries, and shipment notes stay with the Uttara office.
        </p>
      </section>

      <section className="admin-form-wrap">
        <form className="admin-form" onSubmit={handleSubmit} noValidate>
          <p className="admin-kicker">Admin</p>
          <h2>Welcome back</h2>
          <p className="admin-note">Use the email and password issued for this desk.</p>

          <label htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@company.com"
          />

          <label htmlFor="admin-password">Password</label>
          <div className="admin-password">
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error ? <p className="admin-error" role="alert">{error}</p> : null}

          <button className="admin-submit" type="submit">Sign in</button>

          <Link className="admin-back" to="/">Back to the website</Link>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
