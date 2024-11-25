import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-red-600 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
