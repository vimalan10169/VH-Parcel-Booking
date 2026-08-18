import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import ErrorPage from "./pages/errorpage";
import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import Tracking from "./components/Tracking";
import History from "./components/History";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/book" element={<BookingForm />} />
        <Route path="/track" element={<Tracking />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;