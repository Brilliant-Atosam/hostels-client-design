import "./common.css";
import Accounts from "./pages/accounts/Accounts";
import Footer from "./components/footer/Footer";
import Hostel from "./pages/hostel/Hostel";
import Hostels from "./pages/Hostels";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter className="container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/hostels" exact element={<Hostels />} />
        <Route path="/hostel/:code" exact element={<Hostel />} />
        <Route path="/accounts" exact element={<Accounts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
