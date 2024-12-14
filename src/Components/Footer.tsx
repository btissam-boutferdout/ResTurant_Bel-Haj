import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"; // Correct import

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-black">
        <div className="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0">
          <a href="/" className="text-light text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="text-light">
            © All Rights Reserved, Made with ❤️ by <span>Btissam.</span>
          </span>
        </div>

        <ul className="nav col-12 col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-light" href="#">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="m-3" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="m-3" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <FontAwesomeIcon icon={faFacebook} size="lg" className="m-3" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
