import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Poppins", "Segoe UI", Arial, sans-serif;
          background: #f7f9fc;
          color: #222;
        }

        a {
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .home-page {
          width: 100%;
          overflow: hidden;
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 620px;
          background: linear-gradient(
            135deg,
            #005bbb,
            #00a8e8
          );
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          top: -180px;
          left: -150px;
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          bottom: -180px;
          right: -120px;
        }

        .hero-overlay {
          width: 100%;
          padding: 80px 20px;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 900px;
          margin: auto;
        }

        .hero-badge {
          display: inline-block;
          padding: 9px 18px;
          border-radius: 30px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.35);
          font-size: 14px;
          margin-bottom: 20px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1.1;
          font-weight: 800;
        }

        .hero h1 span {
          display: block;
          color: white;
        }

        .hero p {
          max-width: 700px;
          margin: 25px auto;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255,255,255,0.92);
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 30px;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .primary-btn {
          background: white;
          color: #007bff;
          border: 2px solid white;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .outline-btn {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .outline-btn:hover {
          background: white;
          color: #007bff;
          transform: translateY(-3px);
        }

        .hero-features {
          max-width: 650px;
          margin: 50px auto 0;
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }

        .hero-features div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hero-features strong {
          font-size: 17px;
        }

        .hero-features small {
          color: rgba(255,255,255,0.75);
        }

        /* ================= USER ================= */

        .user-section {
          padding: 25px 20px;
          background: #f5f8fc;
        }

        .user-box {
          max-width: 1100px;
          margin: auto;
          padding: 18px 25px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .user-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #e8f3ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .user-details {
          flex: 1;
        }

        .user-details span {
          color: #777;
          font-size: 13px;
        }

        .user-details h3 {
          margin: 3px 0 0;
          color: #222;
        }

        .logout-btn {
          border: none;
          padding: 10px 20px;
          background: #dc3545;
          color: white;
          border-radius: 7px;
          cursor: pointer;
          transition: 0.3s;
        }

        .logout-btn:hover {
          background: #b02a37;
          transform: translateY(-2px);
        }

        /* ================= COMMON ================= */

        .section {
          padding: 90px 7%;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-heading span {
          color: #007bff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 10px 0;
          font-size: 38px;
          color: #172033;
        }

        .heading-line {
          width: 60px;
          height: 4px;
          background: #007bff;
          border-radius: 10px;
          margin: 15px auto;
        }

        /* ================= ABOUT ================= */

        .about {
          background: white;
        }

        .about-text {
          max-width: 850px;
          margin: -15px auto 50px;
          text-align: center;
          color: #666;
          line-height: 1.9;
          font-size: 16px;
        }

        .about-highlights {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 25px;
        }

        .highlight {
          text-align: center;
          padding: 35px 25px;
          border-radius: 15px;
          background: #f7faff;
          transition: 0.3s;
        }

        .highlight:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,123,255,0.12);
        }

        .highlight-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .highlight h3 {
          margin: 10px 0;
        }

        .highlight p {
          color: #777;
          line-height: 1.6;
        }

        /* ================= STATS ================= */

        .stats {
          padding: 60px 7%;
          background: linear-gradient(135deg,#0062cc,#00a8e8);
          color: white;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
          text-align: center;
        }

        .stat-box {
          padding: 20px;
          border-right: 1px solid rgba(255,255,255,0.2);
        }

        .stat-box:last-child {
          border-right: none;
        }

        .stat-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .stat-box h2 {
          margin: 5px 0;
          font-size: 35px;
        }

        .stat-box p {
          margin: 5px 0;
          opacity: 0.85;
        }

        /* ================= FEATURES ================= */

        .features {
          background: #f7f9fc;
        }

        .card-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 25px;
        }

        .feature-card {
          background: white;
          padding: 35px 30px;
          border-radius: 18px;
          border: 1px solid #edf0f5;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
          transition: 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          height: 4px;
          width: 0;
          left: 0;
          top: 0;
          background: #007bff;
          transition: 0.35s;
        }

        .feature-card:hover::before {
          width: 100%;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.1);
        }

        .card-icon {
          width: 65px;
          height: 65px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin-bottom: 20px;
        }

        .blue {
          background: #e8f3ff;
        }

        .green {
          background: #e9f9ef;
        }

        .orange {
          background: #fff3e4;
        }

        .purple {
          background: #f1eaff;
        }

        .red {
          background: #ffe9ed;
        }

        .cyan {
          background: #e6faff;
        }

        .feature-card h3 {
          font-size: 21px;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: #777;
          line-height: 1.7;
          min-height: 75px;
        }

        .feature-card a {
          color: #007bff;
          font-weight: 600;
        }

        /* ================= STEPS ================= */

        .steps {
          padding: 90px 7%;
          background: white;
        }

        .steps-container {
          max-width: 1100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .step {
          flex: 1;
          text-align: center;
          padding: 30px 20px;
        }

        .step-number {
          color: #007bff;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .step-icon {
          width: 75px;
          height: 75px;
          margin: auto;
          border-radius: 50%;
          background: #edf6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .step h3 {
          margin: 20px 0 10px;
        }

        .step p {
          color: #777;
          line-height: 1.6;
        }

        .step-arrow {
          font-size: 30px;
          color: #007bff;
        }

        /* ================= TESTIMONIAL ================= */

        .testimonials {
          background: #f7f9fc;
        }

        .testimonial-card {
          background: white;
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
          transition: 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
        }

        .quote {
          font-size: 45px;
          color: #007bff;
          height: 45px;
        }

        .testimonial-card > p {
          color: #666;
          line-height: 1.7;
          margin: 15px 0 25px;
        }

        .customer {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .customer-avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #007bff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .customer h4 {
          margin: 0;
        }

        .customer span {
          font-size: 12px;
          color: #888;
        }

        .stars {
          margin-top: 15px;
          color: #ffb400;
        }

        /* ================= FAQ ================= */

        .faq {
          padding: 90px 7%;
          background: white;
        }

        .faq-container {
          max-width: 900px;
          margin: auto;
        }

        .faq-item {
          padding: 25px 30px;
          margin-bottom: 15px;
          background: #f7faff;
          border-left: 4px solid #007bff;
          border-radius: 8px;
          transition: 0.3s;
        }

        .faq-item:hover {
          transform: translateX(5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .faq-item h3 {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .faq-item p {
          margin: 0;
          color: #666;
          line-height: 1.7;
        }

        /* ================= CTA ================= */

        .cta {
          padding: 80px 20px;
          text-align: center;
          color: white;
          background: linear-gradient(135deg,#0062cc,#00a8e8);
        }

        .cta h2 {
          font-size: 38px;
          margin-bottom: 10px;
        }

        .cta p {
          max-width: 650px;
          margin: 0 auto 30px;
          line-height: 1.7;
          opacity: 0.9;
        }

        .cta-btn {
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          background: white;
          color: #007bff;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }

        /* ================= CONTACT ================= */

        .contact {
          padding: 90px 7%;
          background: #111827;
          color: white;
        }

        .light-heading span {
          color: #45b8ff;
        }

        .light-heading h2 {
          color: white;
        }

        .contact-container {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 25px;
        }

        .contact-box {
          padding: 30px 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 15px;
          background: rgba(255,255,255,0.04);
          transition: 0.3s;
        }

        .contact-box:hover {
          transform: translateY(-7px);
          background: rgba(255,255,255,0.08);
        }

        .contact-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .contact-box h3 {
          margin: 10px 0;
        }

        .contact-box p {
          color: #bbb;
        }

        /* ================= FOOTER ================= */

        .footer {
          background: #080b11;
          color: white;
        }

        .footer-content {
          max-width: 1200px;
          margin: auto;
          padding: 60px 7%;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 50px;
        }

        .footer-brand h2 {
          margin-top: 0;
        }

        .footer-brand p {
          color: #999;
          max-width: 350px;
          line-height: 1.7;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links h3 {
          margin-top: 0;
          margin-bottom: 10px;
        }

        .footer-links a,
        .footer-links span {
          color: #999;
          transition: 0.2s;
        }

        .footer-links a:hover {
          color: #00a8e8;
          transform: translateX(4px);
        }

        .footer-bottom {
          text-align: center;
          padding: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #888;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .about-highlights {
            grid-template-columns: 1fr 1fr;
          }

          .stats {
            grid-template-columns: 1fr 1fr;
          }

          .stat-box {
            border-right: none;
          }

          .card-container {
            grid-template-columns: 1fr 1fr;
          }

          .steps-container {
            flex-wrap: wrap;
          }

          .step {
            flex: 0 0 45%;
          }

          .step-arrow {
            display: none;
          }

          .contact-container {
            grid-template-columns: 1fr 1fr;
          }

          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {

          .hero {
            min-height: 650px;
          }

          .hero-overlay {
            padding: 60px 18px;
          }

          .hero h1 {
            font-size: 40px;
          }

          .hero p {
            font-size: 15px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-buttons a {
            width: 100%;
            max-width: 300px;
          }

          .btn {
            width: 100%;
          }

          .hero-features {
            gap: 25px;
          }

          .user-box {
            flex-wrap: wrap;
          }

          .logout-btn {
            width: 100%;
          }

          .section {
            padding: 65px 20px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .about-highlights {
            grid-template-columns: 1fr;
          }

          .stats {
            grid-template-columns: 1fr 1fr;
            padding: 40px 15px;
          }

          .stat-box h2 {
            font-size: 28px;
          }

          .stat-box p {
            font-size: 13px;
          }

          .card-container {
            grid-template-columns: 1fr;
          }

          .feature-card {
            padding: 30px 25px;
          }

          .steps {
            padding: 65px 20px;
          }

          .steps-container {
            flex-direction: column;
          }

          .step {
            width: 100%;
          }

          .faq {
            padding: 65px 20px;
          }

          .faq-item {
            padding: 20px;
          }

          .cta {
            padding: 65px 20px;
          }

          .cta h2 {
            font-size: 30px;
          }

          .contact {
            padding: 65px 20px;
          }

          .contact-container {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: 1fr;
            padding: 45px 25px;
            gap: 35px;
          }
        }
      `}</style>

      <div className="home-page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-content">

              <span className="hero-badge">
                🚚 Trusted Parcel Delivery
              </span>

              <h1>
                Fast & Reliable
                <span>Parcel Delivery</span>
              </h1>

              <p>
                Book, track and manage your parcels easily with our
                simple and reliable parcel booking system.
              </p>

              <div className="hero-buttons">
                <Link to="/book">
                  <button className="btn primary-btn">
                    📦 Book Parcel
                  </button>
                </Link>

                <Link to="/track">
                  <button className="btn outline-btn">
                    📍 Track Parcel
                  </button>
                </Link>
              </div>

              <div className="hero-features">
                <div>
                  <strong>⚡ Fast</strong>
                  <small>Quick Delivery</small>
                </div>

                <div>
                  <strong>🔒 Secure</strong>
                  <small>Safe Handling</small>
                </div>

                <div>
                  <strong>💰 Affordable</strong>
                  <small>Best Pricing</small>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* USER */}
        {user && (
          <section className="user-section">
            <div className="user-box">

              <div className="user-icon">👤</div>

              <div className="user-details">
                <span>Welcome back</span>
                <h3>{user.name} 👋</h3>
              </div>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>
          </section>
        )}

        {/* ABOUT */}
        <section className="about section">

          <div className="section-heading">
            <span>ABOUT US</span>
            <h2>Reliable Parcel Delivery Made Easy</h2>
            <div className="heading-line"></div>
          </div>

          <p className="about-text">
            We provide fast, secure, and reliable parcel delivery
            solutions across cities. Our system makes parcel booking
            simple and convenient with real-time tracking, affordable
            pricing, and safe delivery.
          </p>

          <div className="about-highlights">

            <div className="highlight">
              <div className="highlight-icon">🚚</div>
              <h3>Door-to-Door</h3>
              <p>
                Convenient parcel delivery from sender to receiver.
              </p>
            </div>

            <div className="highlight">
              <div className="highlight-icon">📍</div>
              <h3>Easy Tracking</h3>
              <p>
                Track your parcel anytime using your Tracking ID.
              </p>
            </div>

            <div className="highlight">
              <div className="highlight-icon">🛡️</div>
              <h3>Safe & Secure</h3>
              <p>
                Your parcels are handled with care throughout delivery.
              </p>
            </div>

          </div>
        </section>

        {/* STATS */}
        <section className="stats">

          <div className="stat-box">
            <div className="stat-icon">📦</div>
            <h2>10,000+</h2>
            <p>Parcels Delivered</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">😊</div>
            <h2>5,000+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">🏙️</div>
            <h2>100+</h2>
            <p>Cities Covered</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <h2>4.9/5</h2>
            <p>Customer Rating</p>
          </div>

        </section>

        {/* FEATURES */}
        <section className="features section">

          <div className="section-heading">
            <span>OUR FEATURES</span>
            <h2>Why Choose Us?</h2>
            <div className="heading-line"></div>
          </div>

          <div className="card-container">

            <div className="feature-card">
              <div className="card-icon blue">⚡</div>
              <h3>Fast Delivery</h3>
              <p>
                Quick and reliable parcel delivery with efficient
                transportation services.
              </p>
              <Link to="/book">Book Now →</Link>
            </div>

            <div className="feature-card">
              <div className="card-icon green">📍</div>
              <h3>Live Tracking</h3>
              <p>
                Track your parcel anytime using your unique Tracking ID.
              </p>
              <Link to="/track">Track Now →</Link>
            </div>

            <div className="feature-card">
              <div className="card-icon orange">💰</div>
              <h3>Affordable Price</h3>
              <p>
                Get transparent and affordable pricing based on weight
                and distance.
              </p>
              <Link to="/book">Check Price →</Link>
            </div>

            <div className="feature-card">
              <div className="card-icon purple">🔒</div>
              <h3>Secure Delivery</h3>
              <p>
                We focus on safe handling and secure transportation of
                your parcels.
              </p>
              <Link to="/book">Learn More →</Link>
            </div>

            <div className="feature-card">
              <div className="card-icon red">📱</div>
              <h3>Easy Booking</h3>
              <p>
                Book your parcel quickly with our simple and
                user-friendly booking process.
              </p>
              <Link to="/book">Book Parcel →</Link>
            </div>

            <div className="feature-card">
              <div className="card-icon cyan">🕐</div>
              <h3>24/7 Access</h3>
              <p>
                Manage your bookings and track your parcels whenever
                you need.
              </p>
              <Link to="/track">Track Parcel →</Link>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="steps">

          <div className="section-heading">
            <span>SIMPLE PROCESS</span>
            <h2>How It Works</h2>
            <div className="heading-line"></div>
          </div>

          <div className="steps-container">

            <div className="step">
              <div className="step-number">01</div>
              <div className="step-icon">📦</div>
              <h3>Book Parcel</h3>
              <p>
                Enter sender and receiver details and provide parcel
                information.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-icon">🎫</div>
              <h3>Get Tracking ID</h3>
              <p>
                A unique tracking ID will be generated after successful
                booking.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-icon">📍</div>
              <h3>Track Parcel</h3>
              <p>
                Use your Tracking ID to check your parcel delivery
                status.
              </p>
            </div>

          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials section">

          <div className="section-heading">
            <span>TESTIMONIALS</span>
            <h2>What Our Customers Say</h2>
            <div className="heading-line"></div>
          </div>

          <div className="card-container">

            <div className="testimonial-card">
              <div className="quote">❝</div>

              <p>
                Fast delivery and easy tracking. The booking process
                was very simple.
              </p>

              <div className="customer">
                <div className="customer-avatar">R</div>

                <div>
                  <h4>Ravi</h4>
                  <span>Happy Customer</span>
                </div>
              </div>

              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <div className="quote">❝</div>

              <p>
                Very affordable and reliable service. I really liked
                the simple interface.
              </p>

              <div className="customer">
                <div className="customer-avatar">P</div>

                <div>
                  <h4>Priya</h4>
                  <span>Happy Customer</span>
                </div>
              </div>

              <div className="stars">★★★★★</div>
            </div>

            <div className="testimonial-card">
              <div className="quote">❝</div>

              <p>
                Best parcel booking experience. Tracking my parcel
                was very easy.
              </p>

              <div className="customer">
                <div className="customer-avatar">A</div>

                <div>
                  <h4>Arun</h4>
                  <span>Happy Customer</span>
                </div>
              </div>

              <div className="stars">★★★★★</div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="faq">

          <div className="section-heading">
            <span>FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <div className="heading-line"></div>
          </div>

          <div className="faq-container">

            <div className="faq-item">
              <h3>❓ How can I track my parcel?</h3>
              <p>
                Use your unique Tracking ID on the Track Parcel page
                to check your delivery status.
              </p>
            </div>

            <div className="faq-item">
              <h3>❓ Is payment required?</h3>
              <p>
                This is a demo application, so no real payment is
                required.
              </p>
            </div>

            <div className="faq-item">
              <h3>❓ How long does delivery take?</h3>
              <p>
                Delivery usually takes 2–5 days depending on the
                destination.
              </p>
            </div>

            <div className="faq-item">
              <h3>❓ How is the delivery price calculated?</h3>
              <p>
                The price is calculated based on parcel weight and
                delivery distance.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="cta">

          <h2>Ready to Send Your Parcel?</h2>

          <p>
            Book your parcel today and enjoy a fast and reliable
            delivery experience.
          </p>

          <Link to="/book">
            <button className="cta-btn">
              📦 Book Your Parcel
            </button>
          </Link>

        </section>

        {/* CONTACT */}
        <section className="contact">

          <div className="section-heading light-heading">
            <span>GET IN TOUCH</span>
            <h2>Contact Us</h2>
            <div className="heading-line"></div>
          </div>

          <div className="contact-container">

            <div className="contact-box">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>support@vhparcelbooking.com</p>
            </div>

            <div className="contact-box">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>+91 9791980514</p>
            </div>

            <div className="contact-box">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Ramanathapuram</p>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">

          <div className="footer-content">

            <div className="footer-brand">
              <h2>🚚 VH Parcel Booking</h2>

              <p>
                Fast, secure and affordable parcel delivery services.
              </p>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>

              <Link to="/">Home</Link>
              <Link to="/book">Book Parcel</Link>
              <Link to="/track">Track Parcel</Link>
            </div>

            <div className="footer-links">
              <h3>Services</h3>

              <span>Fast Delivery</span>
              <span>Live Tracking</span>
              <span>Secure Delivery</span>
            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © 2026 VH Parcel Booking | All Rights Reserved
            </p>
          </div>

        </footer>

      </div>
    </>
  );
}

export default Home;