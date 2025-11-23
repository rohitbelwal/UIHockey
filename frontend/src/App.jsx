import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";

import Events from "./pages/Events";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <div>
      <nav className="bg-blue-700 text-white p-4 shadow-lg flex justify-between">
        <h1 className="text-xl font-bold">UIHA</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* New routes */}
        <Route path="/teams" element={<Teams />} />
        
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}
