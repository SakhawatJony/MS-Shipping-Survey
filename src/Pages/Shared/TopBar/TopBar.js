import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <a href="mailto:hasansit48@gmail.com">
          <MailOutlineIcon />
          hasansit48@gmail.com
        </a>
        <div className="topbar-meta">
          <a href="tel:+8801950090248">
            <PhoneIcon />
            +880 1950-090248
          </a>
          <span className="topbar-hours">
            <AccessTimeIcon sx={{ fontSize: 16, color: "#00aefa" }} />
            Sun–Thu, 9AM – 6PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
