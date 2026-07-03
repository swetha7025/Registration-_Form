import { useState } from "react";
import "../styles/Form.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    country: "",
    nationality: "",
    mobile: "",
    company: "",
    jobTitle: "",
    companyType: "",
    industry: "",
    firstVisit: "",
    visa: "",
    hear: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Registration Submitted!");
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-grid">

        <input
          type="text"
          name="firstName"
          placeholder="First Name *"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Work Email Address *"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirm Work Email Address *"
          value={formData.confirmEmail}
          onChange={handleChange}
        />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Country of Residence *</option>
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

        <select
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        >
          <option value="">Nationality *</option>
          <option>Indian</option>
          <option>American</option>
          <option>Canadian</option>
        </select>

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number *"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
        />

        <select
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
        >
          <option value="">Company Type</option>
          <option>Private</option>
          <option>Government</option>
          <option>Startup</option>
        </select>

        <input
          type="text"
          name="industry"
          placeholder="Your Industry Sector"
          value={formData.industry}
          onChange={handleChange}
        />

      </div>

      <div className="radio-section">
        <label>Is this your first time visiting?</label>

        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="firstVisit"
              value="Yes"
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="firstVisit"
              value="No"
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="bottom-grid">

        <select
          name="visa"
          value={formData.visa}
          onChange={handleChange}
        >
          <option value="">Do You Require A Visa Invitation Letter?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select
          name="hear"
          value={formData.hear}
          onChange={handleChange}
        >
          <option value="">How Did You Hear About Us?</option>
          <option>Google</option>
          <option>LinkedIn</option>
          <option>Facebook</option>
          <option>Friend</option>
        </select>

      </div>
    </form>
  );
}

export default RegistrationForm;