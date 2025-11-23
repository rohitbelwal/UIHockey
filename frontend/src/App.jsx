import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 shadow-lg flex justify-between">
        <h1 className="text-xl font-bold">UIHA</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
