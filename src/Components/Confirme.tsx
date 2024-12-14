import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Confirme = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleConfirm = () => {
    console.log(
      `Data Submitted:\nName: ${formData.name}\nAddress: ${formData.address}\nPhone: ${formData.phone}\nComments: ${formData.comments}`
    );
    setFormData({ name: "", address: "", phone: "", comments: "" });
  };

  return (
    <div className="container mt-5 p-4 bg-dark-subtle rounded shadow">
      <h2 className="text-center text-black mb-4">Confirmation Form</h2>
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
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          className="form-control"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          maxLength="9"
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
        ></textarea>
      </div>
      <div className="text-center">
        <button className="btn btn-danger px-4 py-2" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirme;
