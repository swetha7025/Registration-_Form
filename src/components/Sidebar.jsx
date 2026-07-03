import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="pass-box">

        <h3>Your Selected Pass</h3>

        <button className="change-btn">
          Change Pass
        </button>

        <div className="pass-name">
          All Access Pass
        </div>

        <div className="price">
          USD 101.00
        </div>

        <hr />

        <p>Ticket Amount</p>

        <h4>USD 450.00</h4>

        <input
          type="text"
          placeholder="Enter promo code"
        />

        <button className="validate-btn">
          Validate
        </button>

      </div>

      <div className="badge">

    <h3>Badge Preview</h3>

    <img
        src="/qr.png"
        alt="QR"
    />

    <h2>FULL NAME</h2>

    <p>JOB TITLE</p>

    <p>COMPANY NAME</p>

    <p>COUNTRY OF RESIDENCE</p>

    <div className="badge-category">

        ALL ACCESS PASS

    </div>

    <small>

        This is a preview of your badge.

    </small>

  </div>

    </div>
  )
}

export default Sidebar