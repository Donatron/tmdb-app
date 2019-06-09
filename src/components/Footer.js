import React from "react";

import "./Footer.css";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="Footer">
      <div className="footer-credits">
        <p>
          Site designed by{" "}
          <a
            href="https://www.jumbointeractive.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jumbo Interactive
          </a>{" "}
          and built by{" "}
          <a
            href="https://donatron.github.io/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Don Macarthur
          </a>
        </p>
      </div>
      <p>{`\u00A9 ${date}`}</p>
    </div>
  );
}
