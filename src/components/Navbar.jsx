import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`

        /* ================= NAVBAR ================= */

        .nav {
          width: 100%;
          height: 70px;
          background: linear-gradient(135deg, #0062cc, #00a8e8);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          position: sticky;
          top: 0;
          z-index: 9999;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        /* ================= LOGO ================= */

        .nav-logo {
          text-decoration: none;
          color: white;
        }

        .nav-logo h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 800;
          white-space: nowrap;
        }

        .nav-logo span {
          color: #dff6ff;
        }

        /* ================= NAV LINKS ================= */

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          padding: 10px 15px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .nav-links a:hover {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-2px);
        }

        

        /* ================= MENU BUTTON ================= */

        .menu-btn {
          display: none;
          width: 45px;
          height: 42px;
          border: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          cursor: pointer;
          font-size: 25px;
          align-items: center;
          justify-content: center;
        }

        .menu-btn:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .nav {
            padding: 0 4%;
          }

          .nav-links {
            gap: 3px;
          }

          .nav-links a {
            padding: 9px 10px;
            font-size: 14px;
          }

        }

        /* ================= MOBILE ================= */

        @media (max-width: 700px) {

          .nav {
            height: 65px;
            padding: 0 20px;
          }

          .nav-logo h1 {
            font-size: 21px;
          }

          /* Show menu button */

          .menu-btn {
            display: flex;
          }

          /* Mobile navigation */

          .nav-links {
            position: absolute;
            top: 65px;
            left: 0;
            width: 100%;

            background: linear-gradient(
              180deg,
              #0062cc,
              #007bff
            );

            display: flex;
            flex-direction: column;
            align-items: stretch;

            gap: 5px;
            padding: 15px 20px 20px;

            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

            opacity: 0;
            visibility: hidden;
            transform: translateY(-15px);

            transition:
              opacity 0.3s ease,
              transform 0.3s ease,
              visibility 0.3s ease;
          }

          /* Open menu */

          .nav-links.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .nav-links a {
            width: 100%;
            text-align: center;
            padding: 13px 15px;
            border-radius: 8px;
            font-size: 15px;
          }

          .nav-links a:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: none;
          }

          .book-link {
            margin-top: 5px;
          }

        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {

          .nav {
            padding: 0 15px;
          }

          .nav-logo h1 {
            font-size: 19px;
          }

          .menu-btn {
            width: 42px;
            height: 40px;
          }

        }

      `}</style>

      <nav className="nav">

        {/* LOGO */}

        <Link
          to="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          <h1>
            🚚  VH Parcel <span>Booking</span>
          </h1>
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* NAVIGATION */}

        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenu}
          >
            🏠 Home
          </Link>

          <Link
            to="/book"
            className="book-link"
            onClick={closeMenu}
          >
            📦 Book Parcel
          </Link>

          <Link
            to="/track"
            onClick={closeMenu}
          >
            📍 Track
          </Link>

          <Link
            to="/history"
            onClick={closeMenu}
          >
            📋 History
          </Link>

        </div>

      </nav>
    </>
  );
}

export default Navbar;