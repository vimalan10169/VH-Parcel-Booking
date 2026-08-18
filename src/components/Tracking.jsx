import React, { useState } from "react";

function Tracking() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const parcels = JSON.parse(localStorage.getItem("parcels")) || [];

    const searchId = id.trim();

    const found = parcels.find(
      (p) => p.trackingId.toLowerCase() === searchId.toLowerCase()
    );

    setResult(found || null);
    setSearched(true);
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
          background: #f5f8fc;
          color: #222;
        }

        .tracking-page {
          min-height: 100vh;
          background:
            linear-gradient(
              135deg,
              #f0f8ff 0%,
              #ffffff 50%,
              #eef8ff 100%
            );
          padding-bottom: 70px;
        }

        /* ================= HERO ================= */

        .tracking-hero {
          background: linear-gradient(
            135deg,
            #0062cc,
            #00a8e8
          );
          color: white;
          text-align: center;
          padding: 75px 20px 100px;
          position: relative;
          overflow: hidden;
        }

        .tracking-hero::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          left: -120px;
          top: -180px;
        }

        .tracking-hero::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          right: -100px;
          bottom: -180px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: auto;
        }

        .tracking-badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 30px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .tracking-hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 58px);
          font-weight: 800;
        }

        .tracking-hero h1 span {
          color: #dff5ff;
        }

        .tracking-hero p {
          max-width: 650px;
          margin: 20px auto 0;
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255,255,255,0.9);
        }

        /* ================= SEARCH ================= */

        .tracking-search-wrapper {
          max-width: 900px;
          margin: -55px auto 0;
          padding: 0 20px;
          position: relative;
          z-index: 5;
        }

        .tracking-search-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }

        .search-title {
          text-align: center;
          margin-bottom: 25px;
        }

        .search-title h2 {
          margin: 0 0 8px;
          color: #172033;
        }

        .search-title p {
          margin: 0;
          color: #777;
          font-size: 14px;
        }

        .search-box {
          display: flex;
          gap: 12px;
        }

        .tracking-input {
          flex: 1;
          padding: 16px 18px;
          border: 1px solid #dce3eb;
          border-radius: 10px;
          font-size: 16px;
          outline: none;
          transition: 0.3s;
        }

        .tracking-input:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0,123,255,0.08);
        }

        .track-btn {
          padding: 15px 30px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(
            135deg,
            #007bff,
            #00a8e8
          );
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .track-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,123,255,0.25);
        }

        /* ================= RESULT ================= */

        .result-section {
          max-width: 900px;
          margin: 30px auto 0;
          padding: 0 20px;
        }

        .result-card {
          background: white;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.07);
          border: 1px solid #e6edf5;
        }

        .result-header {
          display: flex;
          align-items: center;
          gap: 15px;
          padding-bottom: 20px;
          border-bottom: 1px solid #edf0f4;
        }

        .result-icon {
          width: 55px;
          height: 55px;
          border-radius: 14px;
          background: #e8f5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 27px;
        }

        .result-header h2 {
          margin: 0;
          color: #172033;
        }

        .result-header p {
          margin: 5px 0 0;
          color: #888;
          font-size: 13px;
        }

        .status-badge {
          margin-left: auto;
          padding: 8px 16px;
          border-radius: 20px;
          background: #e7f8ed;
          color: #1b8f4d;
          font-size: 13px;
          font-weight: 700;
        }

        .result-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 25px;
        }

        .detail-box {
          background: #f8fafc;
          padding: 18px;
          border-radius: 10px;
          border: 1px solid #edf0f4;
        }

        .detail-box span {
          display: block;
          color: #888;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .detail-box strong {
          color: #333;
          font-size: 15px;
          word-break: break-word;
        }

        /* ================= NOT FOUND ================= */

        .not-found {
          background: #fff4f4;
          border: 1px solid #ffd5d5;
          color: #c62828;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
        }

        .not-found h3 {
          margin: 0 0 5px;
        }

        .not-found p {
          margin: 0;
          font-size: 14px;
        }

        /* ================= TRACKING PROCESS ================= */

        .process-section {
          max-width: 1100px;
          margin: 80px auto 0;
          padding: 0 20px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 45px;
        }

        .section-title span {
          color: #007bff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-title h2 {
          margin: 10px 0;
          font-size: 36px;
          color: #172033;
        }

        .section-line {
          width: 60px;
          height: 4px;
          background: #007bff;
          border-radius: 10px;
          margin: 15px auto;
        }

        .process-container {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
        }

        .process-card {
          background: white;
          padding: 30px 20px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid #e8eef5;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
          transition: 0.3s;
        }

        .process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.09);
        }

        .process-icon {
          width: 65px;
          height: 65px;
          margin: auto;
          border-radius: 50%;
          background: #eaf5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .process-card h3 {
          margin: 18px 0 10px;
          color: #172033;
        }

        .process-card p {
          margin: 0;
          color: #777;
          line-height: 1.6;
          font-size: 13px;
        }

        /* ================= BENEFITS ================= */

        .benefits-section {
          margin-top: 80px;
          padding: 80px 20px;
          background: white;
        }

        .benefits-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 25px;
        }

        .benefit-card {
          padding: 30px;
          border-radius: 16px;
          background: #f7faff;
          border: 1px solid #e5edf7;
          transition: 0.3s;
        }

        .benefit-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 30px rgba(0,123,255,0.08);
        }

        .benefit-icon {
          font-size: 35px;
          margin-bottom: 15px;
        }

        .benefit-card h3 {
          margin: 0 0 10px;
          color: #172033;
        }

        .benefit-card p {
          margin: 0;
          color: #777;
          line-height: 1.7;
          font-size: 14px;
        }

        /* ================= FAQ ================= */

        .faq-section {
          max-width: 900px;
          margin: 80px auto 0;
          padding: 0 20px;
        }

        .faq-item {
          background: white;
          padding: 22px 25px;
          margin-bottom: 15px;
          border-radius: 10px;
          border-left: 4px solid #007bff;
          box-shadow: 0 5px 18px rgba(0,0,0,0.05);
        }

        .faq-item h3 {
          margin: 0 0 8px;
          font-size: 16px;
          color: #172033;
        }

        .faq-item p {
          margin: 0;
          color: #777;
          line-height: 1.6;
          font-size: 14px;
        }

        /* ================= CTA ================= */

        .tracking-cta {
          margin-top: 80px;
          padding: 70px 20px;
          text-align: center;
          color: white;
          background: linear-gradient(
            135deg,
            #0062cc,
            #00a8e8
          );
        }

        .tracking-cta h2 {
          font-size: 35px;
          margin: 0 0 12px;
        }

        .tracking-cta p {
          margin: 0 auto;
          max-width: 600px;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {

          .process-container {
            grid-template-columns: 1fr 1fr;
          }

          .benefits-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {

          .tracking-hero {
            padding: 60px 20px 90px;
          }

          .tracking-hero h1 {
            font-size: 38px;
          }

          .tracking-hero p {
            font-size: 14px;
          }

          .tracking-search-card {
            padding: 25px 18px;
          }

          .search-box {
            flex-direction: column;
          }

          .track-btn {
            width: 100%;
          }

          .result-card {
            padding: 22px;
          }

          .result-header {
            flex-wrap: wrap;
          }

          .status-badge {
            margin-left: 0;
          }

          .result-details {
            grid-template-columns: 1fr;
          }

          .process-container {
            grid-template-columns: 1fr;
          }

          .benefits-container {
            grid-template-columns: 1fr;
          }

          .section-title h2 {
            font-size: 30px;
          }

          .tracking-cta h2 {
            font-size: 28px;
          }
        }

      `}</style>

      <div className="tracking-page">

        {/* ================= HERO ================= */}

        <section className="tracking-hero">

          <div className="hero-content">

            <span className="tracking-badge">
              📍 PARCEL TRACKING
            </span>

            <h1>
              Track Your <span>Parcel</span>
            </h1>

            <p>
              Enter your unique Tracking ID below to check the current
              status and delivery information of your parcel.
            </p>

          </div>

        </section>

        {/* ================= SEARCH ================= */}

        <div className="tracking-search-wrapper">

          <div className="tracking-search-card">

            <div className="search-title">

              <h2>🔎 Enter Tracking ID</h2>

              <p>
                Your Tracking ID was generated when you booked the parcel.
              </p>

            </div>

            <div className="search-box">

              <input
                className="tracking-input"
                placeholder="Example: SVJ1750000000000"
                value={id}
                onChange={(e) => setId(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <button
                className="track-btn"
                onClick={handleSearch}
              >
                🔍 Track Parcel
              </button>

            </div>

          </div>

        </div>

        {/* ================= RESULT ================= */}

        {searched && (
          <div className="result-section">

            {result ? (

              <div className="result-card">

                <div className="result-header">

                  <div className="result-icon">
                    📦
                  </div>

                  <div>
                    <h2>Parcel Found</h2>

                    <p>
                      Tracking ID: {result.trackingId}
                    </p>
                  </div>

                  <span className="status-badge">
                    ✓ {result.status}
                  </span>

                </div>

                <div className="result-details">

                  <div className="detail-box">
                    <span>Sender</span>
                    <strong>
                      {result.sender}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Receiver</span>
                    <strong>
                      {result.receiver}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Parcel Weight</span>
                    <strong>
                      {result.weight} kg
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Delivery Address</span>
                    <strong>
                      {result.address}
                    </strong>
                  </div>

                </div>

              </div>

            ) : (

              <div className="not-found">

                <h3>❌ Parcel Not Found</h3>

                <p>
                  Please check your Tracking ID and try again.
                </p>

              </div>

            )}

          </div>
        )}

        {/* ================= HOW TRACKING WORKS ================= */}

        <section className="process-section">

          <div className="section-title">

            <span>TRACKING PROCESS</span>

            <h2>
              How Parcel Tracking Works
            </h2>

            <div className="section-line"></div>

          </div>

          <div className="process-container">

            <div className="process-card">

              <div className="process-icon">
                📦
              </div>

              <h3>Book Parcel</h3>

              <p>
                Complete your parcel booking by entering sender,
                receiver and parcel details.
              </p>

            </div>

            <div className="process-card">

              <div className="process-icon">
                🎫
              </div>

              <h3>Get Tracking ID</h3>

              <p>
                After booking, a unique Tracking ID will be generated
                for your parcel.
              </p>

            </div>

            <div className="process-card">

              <div className="process-icon">
                🔍
              </div>

              <h3>Enter Tracking ID</h3>

              <p>
                Enter your Tracking ID in the search box above.
              </p>

            </div>

            <div className="process-card">

              <div className="process-icon">
                📍
              </div>

              <h3>View Status</h3>

              <p>
                View your parcel status and delivery information
                instantly.
              </p>

            </div>

          </div>

        </section>

        {/* ================= BENEFITS ================= */}

        <section className="benefits-section">

          <div className="section-title">

            <span>OUR SERVICE</span>

            <h2>
              Why Use Our Tracking System?
            </h2>

            <div className="section-line"></div>

          </div>

          <div className="benefits-container">

            <div className="benefit-card">

              <div className="benefit-icon">
                ⚡
              </div>

              <h3>Quick Information</h3>

              <p>
                Get your parcel information quickly using your unique
                Tracking ID.
              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">
                📱
              </div>

              <h3>Easy to Use</h3>

              <p>
                Our simple interface allows you to track your parcel
                from desktop or mobile devices.
              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">
                🔒
              </div>

              <h3>Secure Details</h3>

              <p>
                Your parcel details are stored locally and can be
                accessed using the correct Tracking ID.
              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">
                🎯
              </div>

              <h3>Accurate Tracking</h3>

              <p>
                Search your booking using the exact Tracking ID
                generated during parcel booking.
              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">
                🕐
              </div>

              <h3>Anytime Access</h3>

              <p>
                Track your parcel whenever you need without a
                complicated process.
              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">
                💙
              </div>

              <h3>Customer Friendly</h3>

              <p>
                Designed to make parcel management simple for every
                customer.
              </p>

            </div>

          </div>

        </section>

        {/* ================= FAQ ================= */}

        <section className="faq-section">

          <div className="section-title">

            <span>FAQ</span>

            <h2>
              Tracking Questions
            </h2>

            <div className="section-line"></div>

          </div>

          <div className="faq-item">

            <h3>
              ❓ Where can I find my Tracking ID?
            </h3>

            <p>
              Your Tracking ID is displayed after successfully
              booking a parcel.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              ❓ What should I do if my parcel is not found?
            </h3>

            <p>
              Make sure you enter the Tracking ID correctly and
              try searching again.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              ❓ Can I track my parcel on mobile?
            </h3>

            <p>
              Yes. The tracking page is designed to work on both
              mobile phones and desktop devices.
            </p>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="tracking-cta">

          <h2>
            📦 Need to Book Another Parcel?
          </h2>

          <p>
            Go back to the booking page and create a new parcel
            booking to receive a new Tracking ID.
          </p>

        </section>

      </div>
    </>
  );
}

export default Tracking;