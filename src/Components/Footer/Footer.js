import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footerArea">
      <footer className="text-muted">
        <p>
          <span>
            <FontAwesomeIcon icon={faCopyright} />
          </span>{" "}
          Copyright 2021 Shahid-Miya Fantasy Manía De Fútbol. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
