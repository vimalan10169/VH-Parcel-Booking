// ErrorPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className ="errorpage">
      <h1>404 ❌</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>

      <button onClick={() => navigate("/")}>
        Go Back Home 🏠
      </button>
    </div>
  );
}

export default ErrorPage;