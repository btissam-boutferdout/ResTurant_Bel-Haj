import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Confirme = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { name, address, phone } = formData;

    if (!name.trim()) {
      return "Name is required.";
    }
    if (!address.trim()) {
      return "Address is required.";
    }
    if (!phone.trim() || !/^\d{9}$/.test(phone)) {
      return "Phone number must be 9 digits.";
    }

    return "";
  };

  const handleConfirm = () => {
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    // Handle form submission
    console.log(
      `Data Submitted:\nName: ${formData.name}\nAddress: ${formData.address}\nPhone: ${formData.phone}\nComments: ${formData.comments}`
    );

    // Clear form and show success message
    setFormData({ name: "", address: "", phone: "", comments: "" });
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
      <h2 className="text-center text-black mb-4">Confirmation Form</h2>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {submitted && (
        <div className="alert alert-success text-center" role="alert">
          Form successfully submitted!
        </div>
      )}

      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Enter your name"
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="address" className="form-label">
          Your Address
        </label>
        <input
          type="text"
          id="address"
          className="form-control"
          placeholder="Enter Your Address"
          value={formData.address}
          onChange={handleChange}
          aria-label="Enter your address"
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="form-control"
          placeholder="Enter Your Phone Number (9 digits)"
          value={formData.phone}
          onChange={handleChange}
          aria-label="Enter your phone number"
          maxLength={9}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="comments" className="form-label">
          Additional Comments
        </label>
        <textarea
          id="comments"
          className="form-control"
          rows={4}
          placeholder="Enter your comments here..."
          value={formData.comments}
          onChange={handleChange}
          aria-label="Enter additional comments"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          className="btn btn-danger px-4 py-2"
          onClick={handleConfirm}
          aria-label="Confirm form submission"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirme;
