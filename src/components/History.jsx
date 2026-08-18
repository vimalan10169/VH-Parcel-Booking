import React, { useEffect, useState } from "react";

function History() {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("parcels")) || [];
    setParcels(data);
  }, []);

  const totalParcels = parcels.length;

  const bookedParcels = parcels.filter(
    (p) => p.status === "Booked"
  ).length;

  const totalWeight = parcels.reduce(
    (total, p) => total + Number(p.weight || 0),
    0
  );

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

        /* ================= PAGE ================= */

        .history-page {
          min-height: 100vh;
          background:
            linear-gradient(
              135deg,
              #eef7ff 0%,
              #ffffff 50%,
              #f1f9ff 100%
            );
          padding-bottom: 70px;
        }

        /* ================= HERO ================= */

        .history-hero {
          background: linear-gradient(
            135deg,
            #0062cc,
            #00a8e8
          );
          color: white;
          text-align: center;
          padding: 70px 20px 95px;
          position: relative;
          overflow: hidden;
        }

        .history-hero::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          left: -150px;
          top: -180px;
        }

        .history-hero::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          right: -120px;
          bottom: -180px;
        }

        .history-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: auto;
        }

        .history-badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 30px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .history-hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 56px);
          font-weight: 800;
        }

        .history-hero h1 span {
          color: #dff5ff;
        }

        .history-hero p {
          max-width: 650px;
          margin: 18px auto 0;
          line-height: 1.8;
          color: rgba(255,255,255,0.9);
          font-size: 16px;
        }

        /* ================= SUMMARY ================= */

        .summary-container {
          max-width: 1100px;
          margin: -50px auto 0;
          padding: 0 20px;
          position: relative;
          z-index: 5;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .summary-card {
          background: white;
          padding: 28px;
          border-radius: 18px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 18px;
          transition: 0.3s;
        }

        .summary-card:hover {
          transform: translateY(-5px);
        }

        .summary-icon {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 15px;
          background: #e9f5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .summary-card h3 {
          margin: 0;
          font-size: 28px;
          color: #172033;
        }

        .summary-card p {
          margin: 5px 0 0;
          color: #777;
          font-size: 13px;
        }

        /* ================= HISTORY ================= */

        .history-container {
          max-width: 1100px;
          margin: 70px auto 0;
          padding: 0 20px;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 35px;
        }

        .section-heading span {
          color: #007bff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 10px 0;
          font-size: 36px;
          color: #172033;
        }

        .heading-line {
          width: 60px;
          height: 4px;
          background: #007bff;
          margin: 15px auto;
          border-radius: 10px;
        }

        .section-heading p {
          color: #777;
          margin: 0 auto;
          max-width: 600px;
          line-height: 1.6;
          font-size: 14px;
        }

        /* ================= HISTORY CARD ================= */

        .history-card {
          background: white;
          border-radius: 18px;
          padding: 28px;
          margin-bottom: 20px;
          border: 1px solid #e6edf5;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
          transition: 0.3s;
        }

        .history-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.09);
        }

        .history-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding-bottom: 18px;
          border-bottom: 1px solid #edf0f4;
          margin-bottom: 20px;
        }

        .tracking-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .parcel-icon {
          width: 50px;
          height: 50px;
          background: #eaf5ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .tracking-info h3 {
          margin: 0;
          color: #172033;
          font-size: 16px;
          word-break: break-word;
        }

        .tracking-info p {
          margin: 5px 0 0;
          color: #888;
          font-size: 12px;
        }

        .status {
          padding: 8px 16px;
          border-radius: 20px;
          background: #e7f8ed;
          color: #198754;
          font-size: 12px;
          font-weight: 700;
        }

        .history-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .detail {
          background: #f8fafc;
          padding: 15px;
          border-radius: 10px;
        }

        .detail small {
          display: block;
          color: #888;
          font-size: 11px;
          margin-bottom: 5px;
        }

        .detail strong {
          color: #333;
          font-size: 14px;
          word-break: break-word;
        }

        /* ================= EMPTY STATE ================= */

        .empty-history {
          background: white;
          padding: 65px 30px;
          text-align: center;
          border-radius: 20px;
          border: 1px solid #e5edf5;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .empty-icon {
          font-size: 65px;
          margin-bottom: 15px;
        }

        .empty-history h2 {
          color: #172033;
          margin: 0 0 10px;
        }

        .empty-history p {
          color: #777;
          max-width: 500px;
          margin: auto;
          line-height: 1.7;
        }

        /* ================= FEATURES ================= */

        .features-section {
          margin-top: 80px;
          padding: 80px 20px;
          background: white;
        }

        .features-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .feature-card {
          background: #f7faff;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid #e5edf7;
          transition: 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 30px rgba(0,123,255,0.08);
        }

        .feature-icon {
          font-size: 36px;
          margin-bottom: 15px;
        }

        .feature-card h3 {
          margin: 0 0 10px;
          color: #172033;
        }

        .feature-card p {
          margin: 0;
          color: #777;
          line-height: 1.7;
          font-size: 14px;
        }

        /* ================= HOW IT WORKS ================= */

        .steps-section {
          max-width: 1100px;
          margin: 80px auto 0;
          padding: 0 20px;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .step-card {
          background: white;
          padding: 28px 20px;
          text-align: center;
          border-radius: 16px;
          border: 1px solid #e5edf5;
          box-shadow: 0 7px 25px rgba(0,0,0,0.05);
        }

        .step-number {
          width: 48px;
          height: 48px;
          margin: auto;
          background: #007bff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
        }

        .step-card h3 {
          margin: 15px 0 8px;
          color: #172033;
        }

        .step-card p {
          margin: 0;
          color: #777;
          font-size: 13px;
          line-height: 1.6;
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
          color: #172033;
          font-size: 16px;
        }

        .faq-item p {
          margin: 0;
          color: #777;
          font-size: 14px;
          line-height: 1.6;
        }

        /* ================= CTA ================= */

        .history-cta {
          margin-top: 80px;
          padding: 70px 20px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #0062cc,
            #00a8e8
          );
          color: white;
        }

        .history-cta h2 {
          margin: 0 0 12px;
          font-size: 35px;
        }

        .history-cta p {
          max-width: 600px;
          margin: auto;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {

          .summary-grid {
            grid-template-columns: 1fr 1fr;
          }

          .features-container {
            grid-template-columns: 1fr 1fr;
          }

          .steps-container {
            grid-template-columns: 1fr 1fr;
          }

        }

        @media (max-width: 600px) {

          .history-hero {
            padding: 55px 20px 85px;
          }

          .history-hero h1 {
            font-size: 38px;
          }

          .history-hero p {
            font-size: 14px;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }

          .history-container {
            margin-top: 50px;
          }

          .section-heading h2 {
            font-size: 29px;
          }

          .history-card {
            padding: 20px;
          }

          .history-card-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .status {
            margin-left: 65px;
          }

          .history-details {
            grid-template-columns: 1fr;
          }

          .features-container {
            grid-template-columns: 1fr;
          }

          .steps-container {
            grid-template-columns: 1fr;
          }

          .history-cta h2 {
            font-size: 28px;
          }

        }

      `}</style>

      <div className="history-page">

        {/* ================= HERO ================= */}

        <section className="history-hero">

          <div className="history-hero-content">

            <span className="history-badge">
              📋 PARCEL MANAGEMENT
            </span>

            <h1>
              Parcel <span>History</span>
            </h1>

            <p>
              View all your previously booked parcels, check their
              tracking information, weight and current delivery status
              in one place.
            </p>

          </div>

        </section>

        {/* ================= SUMMARY ================= */}

        <div className="summary-container">

          <div className="summary-grid">

            <div className="summary-card">

              <div className="summary-icon">
                📦
              </div>

              <div>
                <h3>{totalParcels}</h3>
                <p>Total Parcels</p>
              </div>

            </div>

            <div className="summary-card">

              <div className="summary-icon">
                🚚
              </div>

              <div>
                <h3>{bookedParcels}</h3>
                <p>Active Bookings</p>
              </div>

            </div>

            <div className="summary-card">

              <div className="summary-icon">
                ⚖️
              </div>

              <div>
                <h3>
                  {totalWeight.toFixed(1)} kg
                </h3>

                <p>Total Parcel Weight</p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= HISTORY ================= */}

        <section className="history-container">

          <div className="section-heading">

            <span>YOUR BOOKINGS</span>

            <h2>
              Recent Parcel History
            </h2>

            <div className="heading-line"></div>

            <p>
              All your parcel bookings are displayed below.
              You can use the Tracking ID to track individual parcels.
            </p>

          </div>

          {parcels.length === 0 ? (

            <div className="empty-history">

              <div className="empty-icon">
                📦
              </div>

              <h2>
                No Parcel History Yet
              </h2>

              <p>
                You haven't booked any parcels yet. Once you create
                a parcel booking, your booking information will appear
                here automatically.
              </p>

            </div>

          ) : (

            parcels.map((p, index) => (

              <div
                className="history-card"
                key={index}
              >

                <div className="history-card-header">

                  <div className="tracking-info">

                    <div className="parcel-icon">
                      📦
                    </div>

                    <div>

                      <h3>
                        {p.trackingId}
                      </h3>

                      <p>
                        Parcel #{index + 1}
                      </p>

                    </div>

                  </div>

                  <span className="status">
                    ✓ {p.status}
                  </span>

                </div>

                <div className="history-details">

                  <div className="detail">

                    <small>
                      SENDER
                    </small>

                    <strong>
                      👤 {p.sender}
                    </strong>

                  </div>

                  <div className="detail">

                    <small>
                      RECEIVER
                    </small>

                    <strong>
                      👥 {p.receiver}
                    </strong>

                  </div>

                  <div className="detail">

                    <small>
                      WEIGHT
                    </small>

                    <strong>
                      ⚖️ {p.weight} kg
                    </strong>

                  </div>

                  <div className="detail">

                    <small>
                      STATUS
                    </small>

                    <strong>
                      🟢 {p.status}
                    </strong>

                  </div>

                  <div
                    className="detail"
                    style={{ gridColumn: "1 / -1" }}
                  >

                    <small>
                      DELIVERY ADDRESS
                    </small>

                    <strong>
                      📍 {p.address || "Address not available"}
                    </strong>

                  </div>

                </div>

              </div>

            ))

          )}

        </section>

        {/* ================= FEATURES ================= */}

        <section className="features-section">

          <div className="section-heading">

            <span>PARCEL SERVICE</span>

            <h2>
              Manage Your Parcels Easily
            </h2>

            <div className="heading-line"></div>

          </div>

          <div className="features-container">

            <div className="feature-card">

              <div className="feature-icon">
                📋
              </div>

              <h3>
                Complete History
              </h3>

              <p>
                Keep track of all your parcel bookings and view
                important delivery information whenever you need it.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                🔍
              </div>

              <h3>
                Easy Tracking
              </h3>

              <p>
                Every booking has a unique Tracking ID that can be
                used to find your parcel quickly.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                🔒
              </div>

              <h3>
                Secure Storage
              </h3>

              <p>
                Booking information is stored locally in your browser
                for this demo parcel booking application.
              </p>

            </div>

          </div>

        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section className="steps-section">

          <div className="section-heading">

            <span>PROCESS</span>

            <h2>
              How Parcel Management Works
            </h2>

            <div className="heading-line"></div>

          </div>

          <div className="steps-container">

            <div className="step-card">

              <div className="step-number">
                1
              </div>

              <h3>
                Book
              </h3>

              <p>
                Enter the sender, receiver, weight and delivery address.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                2
              </div>

              <h3>
                Generate ID
              </h3>

              <p>
                A unique Tracking ID is generated after successful booking.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                3
              </div>

              <h3>
                Track
              </h3>

              <p>
                Use the Tracking ID to view your parcel information.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                4
              </div>

              <h3>
                Manage
              </h3>

              <p>
                View all your previous parcel bookings in the history page.
              </p>

            </div>

          </div>

        </section>

        {/* ================= FAQ ================= */}

        <section className="faq-section">

          <div className="section-heading">

            <span>FAQ</span>

            <h2>
              Frequently Asked Questions
            </h2>

            <div className="heading-line"></div>

          </div>

          <div className="faq-item">

            <h3>
              ❓ Where is parcel history stored?
            </h3>

            <p>
              For this application, parcel information is stored in
              the browser's localStorage.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              ❓ How can I track a previous parcel?
            </h3>

            <p>
              Copy the Tracking ID from the history page and enter it
              on the Track Parcel page.
            </p>

          </div>

          <div className="faq-item">

            <h3>
              ❓ Why is my history empty?
            </h3>

            <p>
              If you have not booked any parcels yet, the history page
              will show an empty state message.
            </p>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="history-cta">

          <h2>
            📦 Keep Your Parcel Information Organized
          </h2>

          <p>
            View your bookings, check Tracking IDs and manage your
            parcel information easily from one place.
          </p>

        </section>

      </div>
    </>
  );
}

export default History;