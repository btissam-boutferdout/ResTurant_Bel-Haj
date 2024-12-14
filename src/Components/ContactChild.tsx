import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactChild = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">
        We’d love to hear from you! Reach out to us via the form below or visit
        us at our restaurant.
      </p>

      {/* Contact Form */}
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-4">Send us a message</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6 mt-5 mt-md-0">
          <h3 className="mb-4">Contact Information</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            <strong>Address:</strong> 123 Main Street, Your City
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            <strong>Phone:</strong> +1 (234) 567-890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            <strong>Email:</strong> contact@belhajj.com
          </p>

          <h3 className="mt-4">Follow Us</h3>
          <p>
            <a href="#" className="text-dark me-3" aria-label="Facebook">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a href="#" className="text-dark me-3" aria-label="Instagram">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
            <a href="#" className="text-dark" aria-label="Twitter">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactChild;
