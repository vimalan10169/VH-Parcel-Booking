import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    sender: "",
    receiver: "",
    weight: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(form.weight) <= 0) {
      alert("Weight must be greater than 0");
      return;
    }

    const trackingId = "SVJ" + Date.now();

    const parcel = {
      ...form,
      trackingId,
      status: "Booked"
    };

    let parcels = JSON.parse(localStorage.getItem("parcels")) || [];

    parcels.push(parcel);

    localStorage.setItem("parcels", JSON.stringify(parcels));

    alert("Parcel Booked! Tracking ID: " + trackingId);

    setForm({
      sender: "",
      receiver: "",
      weight: "",
      address: ""
    });

    navigate("/");
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Poppins", "Segoe UI", Arial, sans-serif;
          background: #f4f7fb;
          color: #222;
        }

        .booking-page {
          min-height: 100vh;
          padding: 50px 20px 70px;
          background:
            linear-gradient(
              135deg,
              #eef7ff 0%,
              #f8fbff 50%,
              #eef8ff 100%
            );
        }

        /* ================= HEADER ================= */

        .booking-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 45px;
        }

        .booking-badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 30px;
          background: #e5f2ff;
          color: #007bff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .booking-header h1 {
          margin: 0;
          font-size: 42px;
          color: #172033;
        }

        .booking-header h1 span {
          color: #007bff;
        }

        .booking-header p {
          margin: 15px auto 0;
          max-width: 650px;
          color: #687386;
          line-height: 1.7;
          font-size: 16px;
        }

        /* ================= MAIN ================= */

        .booking-wrapper {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 30px;
          align-items: stretch;
        }

        /* ================= FORM ================= */

        .form-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 80, 160, 0.08);
          border: 1px solid #e8eef5;
        }

        .form-title {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .form-title-icon {
          width: 55px;
          height: 55px;
          background: #e9f4ff;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 27px;
        }

        .form-title h2 {
          margin: 0;
          color: #172033;
          font-size: 24px;
        }

        .form-title p {
          margin: 5px 0 0;
          color: #888;
          font-size: 13px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 600;
          font-size: 14px;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
        }

        .form-input {
          width: 100%;
          padding: 14px 15px 14px 48px;
          border: 1px solid #dce3eb;
          border-radius: 10px;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
          background: #fbfcfe;
        }

        .form-input:focus {
          border-color: #007bff;
          background: white;
          box-shadow: 0 0 0 4px rgba(0,123,255,0.08);
        }

        .address-input {
          min-height: 100px;
          resize: vertical;
          padding-top: 15px;
        }

        .address-icon {
          top: 20px;
          transform: none;
        }

        .submit-btn {
          width: 100%;
          border: none;
          padding: 16px;
          margin-top: 10px;
          border-radius: 10px;
          background: linear-gradient(135deg, #007bff, #00a8e8);
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,123,255,0.25);
        }

        .secure-note {
          text-align: center;
          margin-top: 15px;
          color: #777;
          font-size: 12px;
        }

        /* ================= SIDE CARD ================= */

        .info-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          background: linear-gradient(
            135deg,
            #0062cc,
            #00a8e8
          );
          color: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,123,255,0.15);
        }

        .info-card h2 {
          margin-top: 0;
          font-size: 26px;
        }

        .info-card > p {
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
        }

        .info-list {
          margin-top: 25px;
        }

        .info-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 22px;
        }

        .info-item-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 10px;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .info-item h4 {
          margin: 0 0 5px;
          font-size: 15px;
        }

        .info-item p {
          margin: 0;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
        }

        /* ================= BENEFITS ================= */

        .benefits-card {
          background: white;
          padding: 28px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          border: 1px solid #e8eef5;
        }

        .benefits-card h3 {
          margin-top: 0;
          color: #172033;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #edf0f4;
        }

        .benefit:last-child {
          border-bottom: none;
        }

        .check {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e8f8ee;
          color: #20a35a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .benefit span:last-child {
          color: #555;
          font-size: 14px;
        }

        /* ================= BOTTOM SECTION ================= */

        .bottom-section {
          max-width: 1150px;
          margin: 40px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .bottom-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          border: 1px solid #e8eef5;
          transition: 0.3s;
        }

        .bottom-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .bottom-icon {
          font-size: 35px;
          margin-bottom: 10px;
        }

        .bottom-card h3 {
          margin: 8px 0;
          color: #172033;
        }

        .bottom-card p {
          margin: 0;
          color: #777;
          font-size: 13px;
          line-height: 1.6;
        }

        /* ================= PROCESS ================= */

        .process-section {
          max-width: 1150px;
          margin: 45px auto 0;
          text-align: center;
        }

        .process-section h2 {
          color: #172033;
          margin-bottom: 30px;
        }

        .process-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .process-card {
          background: white;
          padding: 25px 20px;
          border-radius: 15px;
          border: 1px solid #e8eef5;
        }

        .process-number {
          width: 45px;
          height: 45px;
          margin: auto;
          border-radius: 50%;
          background: #007bff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .process-card h3 {
          margin: 15px 0 8px;
        }

        .process-card p {
          color: #777;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {

          .booking-wrapper {
            grid-template-columns: 1fr;
          }

          .bottom-section {
            grid-template-columns: 1fr 1fr;
          }

          .process-container {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media (max-width: 600px) {

          .booking-page {
            padding: 35px 15px 50px;
          }

          .booking-header h1 {
            font-size: 32px;
          }

          .booking-header p {
            font-size: 14px;
          }

          .form-card {
            padding: 25px 20px;
          }

          .info-card {
            padding: 28px 22px;
          }

          .bottom-section {
            grid-template-columns: 1fr;
          }

          .process-container {
            grid-template-columns: 1fr;
          }

          .user-box {
            flex-direction: column;
          }
        }

      `}</style>

      <div className="booking-page">

        {/* ================= HEADER ================= */}

        <div className="booking-header">

          <span className="booking-badge">
            📦 PARCEL BOOKING
          </span>

          <h1>
            Book Your <span>Parcel</span>
          </h1>

          <p>
            Send your parcel quickly and safely. Enter the sender,
            receiver and parcel details below to create your booking.
          </p>

        </div>

        {/* ================= MAIN ================= */}

        <div className="booking-wrapper">

          {/* FORM */}

          <div className="form-card">

            <div className="form-title">

              <div className="form-title-icon">
                📦
              </div>

              <div>
                <h2>Parcel Details</h2>
                <p>Fill in the information to book your parcel</p>
              </div>

            </div>

            <form onSubmit={handleSubmit}>

              {/* SENDER */}

              <div className="form-group">

                <label>Sender Name</label>

                <div className="input-wrapper">

                  <span className="input-icon">👤</span>

                  <input
                    className="form-input"
                    name="sender"
                    placeholder="Enter sender name"
                    value={form.sender}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* RECEIVER */}

              <div className="form-group">

                <label>Receiver Name</label>

                <div className="input-wrapper">

                  <span className="input-icon">👥</span>

                  <input
                    className="form-input"
                    name="receiver"
                    placeholder="Enter receiver name"
                    value={form.receiver}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* WEIGHT */}

              <div className="form-group">

                <label>Parcel Weight</label>

                <div className="input-wrapper">

                  <span className="input-icon">⚖️</span>

                  <input
                    className="form-input"
                    type="number"
                    name="weight"
                    placeholder="Enter weight in kg"
                    min="0.1"
                    step="0.1"
                    value={form.weight}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* ADDRESS */}

              <div className="form-group">

                <label>Delivery Address</label>

                <div className="input-wrapper">

                  <span className="input-icon address-icon">
                    📍
                  </span>

                  <textarea
                    className="form-input address-input"
                    name="address"
                    placeholder="Enter complete delivery address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                📦 Book Parcel Now
              </button>

              <p className="secure-note">
                🔒 Your booking information is securely stored.
              </p>

            </form>

          </div>

          {/* ================= INFORMATION ================= */}

          <div className="info-column">

            <div className="info-card">

              <h2>🚚 Easy Parcel Delivery</h2>

              <p>
                Our parcel booking system makes it easy to send
                packages from one location to another.
              </p>

              <div className="info-list">

                <div className="info-item">

                  <div className="info-item-icon">
                    ⚡
                  </div>

                  <div>
                    <h4>Fast Processing</h4>
                    <p>
                      Your booking is processed instantly.
                    </p>
                  </div>

                </div>

                <div className="info-item">

                  <div className="info-item-icon">
                    📍
                  </div>

                  <div>
                    <h4>Easy Tracking</h4>
                    <p>
                      Get a unique Tracking ID after booking.
                    </p>
                  </div>

                </div>

                <div className="info-item">

                  <div className="info-item-icon">
                    🛡️
                  </div>

                  <div>
                    <h4>Safe Delivery</h4>
                    <p>
                      Your parcel details are safely stored.
                    </p>
                  </div>

                </div>

                <div className="info-item">

                  <div className="info-item-icon">
                    💰
                  </div>

                  <div>
                    <h4>Affordable Pricing</h4>
                    <p>
                      Simple pricing based on parcel weight.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* BENEFITS */}

            <div className="benefits-card">

              <h3>Why Book With Us?</h3>

              <div className="benefit">
                <div className="check">✓</div>
                <span>Simple booking process</span>
              </div>

              <div className="benefit">
                <div className="check">✓</div>
                <span>Instant Tracking ID</span>
              </div>

              <div className="benefit">
                <div className="check">✓</div>
                <span>Easy parcel tracking</span>
              </div>

              <div className="benefit">
                <div className="check">✓</div>
                <span>Secure information storage</span>
              </div>

              <div className="benefit">
                <div className="check">✓</div>
                <span>Reasoning Price</span>
              </div>

            </div>

          </div>

        </div>

        {/* ================= EXTRA CONTENT ================= */}

        <div className="bottom-section">

          <div className="bottom-card">

            <div className="bottom-icon">
              📦
            </div>

            <h3>Easy Booking</h3>

            <p>
              Enter a few details and book your parcel within minutes.
            </p>

          </div>

          <div className="bottom-card">

            <div className="bottom-icon">
              📍
            </div>

            <h3>Track Anytime</h3>

            <p>
              Use your Tracking ID to check your parcel status anytime.
            </p>

          </div>

          <div className="bottom-card">

            <div className="bottom-icon">
              🔒
            </div>

            <h3>Secure Service</h3>

            <p>
              Your parcel information is stored securely in the system.
            </p>

          </div>

        </div>

        {/* ================= PROCESS ================= */}

        <div className="process-section">

          <h2>
            How Parcel Booking Works
          </h2>

          <div className="process-container">

            <div className="process-card">

              <div className="process-number">
                1
              </div>

              <h3>Enter Details</h3>

              <p>
                Provide sender, receiver, weight and delivery address.
              </p>

            </div>

            <div className="process-card">

              <div className="process-number">
                2
              </div>

              <h3>Book Parcel</h3>

              <p>
                Click the booking button to create your parcel booking.
              </p>

            </div>

            <div className="process-card">

              <div className="process-number">
                3
              </div>

              <h3>Track Parcel</h3>

              <p>
                Receive a Tracking ID and track your parcel status.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default BookingForm;