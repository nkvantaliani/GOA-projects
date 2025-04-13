import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import News from "./components/News";
import Tung from "./components/Tung";
import Tralalero from "./components/Tralalero";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <nav className="bg-white shadow p-4 flex gap-4 justify-center">
          <Link className="hover:text-blue-600 transition duration-300" to="/">News</Link>
          <Link className="hover:text-blue-600 transition duration-300" to="/tung">Tung</Link>
          <Link className="hover:text-blue-600 transition duration-300" to="/tralalero">Tralalero</Link>
        </nav>

        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/tung" element={<Tung />} />
          <Route path="/tralalero" element={<Tralalero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;