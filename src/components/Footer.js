import "./FooterStyles.css";
// Import Font Awesome components and brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faBehanceSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"; // Import brand icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            {/* Use FontAwesomeIcon component */}
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="/">
            {/* Use FontAwesomeIcon component */}
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a href="/">
            {/* Use FontAwesomeIcon component */}
            <FontAwesomeIcon icon={faBehanceSquare} />
          </a>
          <a href="/">
            {/* Use FontAwesomeIcon component */}
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
